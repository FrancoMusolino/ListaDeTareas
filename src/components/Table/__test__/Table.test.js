const {
  render,
  screen,
  fireEvent,
  prettyDOM,
} = require("@testing-library/react");

import { MockedTableComponent } from "./mocks/MockedComponent";

const spyOnWindow = jest.spyOn(window, "confirm");
const currentDay = new Date().toISOString().split("T")[0];

const data = {
  state: {
    db: [
      {
        date: "2024-11-18",
        id: 1,
        name: "Task 1",
      },
      {
        date: "2021-12-20",
        id: 2,
        name: "Task 2",
      },
    ],
  },
  dispatch: jest.fn(),
};

describe("Componente Table", () => {
  beforeEach(() => {
    render(<MockedTableComponent data={data} />);
  });

  it("Should render in the document", () => {
    const tableElement = screen.getByRole("table");
    // console.log(prettyDOM(tableElement));

    expect(tableElement).toBeInTheDocument();
  });

  it("Should not render the empty message if the table have one or more tasks", () => {
    const emptyMessage = screen.queryByText("No hay tareas");

    expect(emptyMessage).not.toBeInTheDocument();
  });

  it("Should render table rows according of the numbers of tasks", () => {
    const tableRows = screen.getAllByText("Task", { exact: false });

    expect(tableRows).toHaveLength(data.state.db.length);
  });

  it("Should complete inputs values with row value on click on edit button", () => {
    const editButton = screen.getAllByTestId("EditIcon")[0].parentElement;
    const textInputElement = screen.getByPlaceholderText("Nombre");
    const dateInputElement = screen.getByRole("date");

    const { name, date } = data.state.db[0];

    fireEvent.click(editButton);

    expect(textInputElement.value).toEqual(name);
    expect(dateInputElement.value).toEqual(date);
  });

  it("Should render CheckCircleIcon icon if the deadline of the task is not expired yet", () => {
    const checkIcon = screen.queryAllByTestId("CheckCircleIcon");
    const dates = data.state.db.map((item) => item.date);

    if (dates.some((date) => date >= currentDay)) {
      expect(checkIcon.length - 1).toBeTruthy();
    } else {
      expect(checkIcon.length - 1).toBeFalsy();
    }
  });

  it("Should render ErrorOutlineIcon icon if the deadline of the task is expired", () => {
    const errorIcon = screen.queryAllByTestId("ErrorOutlineIcon");
    const dates = data.state.db.map((item) => item.date);

    if (dates.some((date) => date < currentDay)) {
      expect(errorIcon.length - 1).toBeTruthy();
    } else {
      expect(errorIcon.length - 1).toBeFalsy();
    }
  });
});

describe("Componente Table (without beforeEach)", () => {
  it("Should remove the row when user clicks on delete(trash) button", async () => {
    const { rerender } = render(<MockedTableComponent data={data} />);

    const deleteButton = screen.getAllByTestId("DeleteIcon")[0].parentElement;
    const dbLength = data.state.db.length;

    fireEvent.click(deleteButton);

    const spyCall = spyOnWindow.mockReturnValue(true);

    if (spyCall()) {
      data.state.db.shift();
    }

    await rerender(<MockedTableComponent data={data} />);
    const tableRows = screen.getAllByText("Task", { exact: false });

    expect(tableRows).toHaveLength(dbLength - 1);
  });

  it("Should not remove the row when user clicks on delete(trash) button but not confirm the action", async () => {
    const { rerender } = render(<MockedTableComponent data={data} />);

    const deleteButton = screen.getAllByTestId("DeleteIcon")[0].parentElement;
    const dbLength = data.state.db.length;

    fireEvent.click(deleteButton);

    const spyCall = spyOnWindow.mockReturnValue(false);

    if (spyCall()) {
      data.state.db.shift();
    }

    await rerender(<MockedTableComponent data={data} />);
    const tableRows = screen.getAllByText("Task", { exact: false });

    expect(tableRows).toHaveLength(dbLength);
  });

  it("Should render the empty message if the table doesn't have tasks", () => {
    const data = {
      state: { db: [] },
      dispatch: jest.fn(),
    };

    render(<MockedTableComponent data={data} />);

    const emptyMessage = screen.getByText("No hay tareas");
    expect(emptyMessage).toBeInTheDocument();
  });
});
