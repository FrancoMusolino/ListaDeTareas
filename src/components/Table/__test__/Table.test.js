import {
  render,
  screen,
  fireEvent,
  prettyDOM,
  within,
} from "@testing-library/react";
import { compareAsc } from "date-fns";

import { MockedTableComponent } from "./mocks/MockedComponent";

const spyOnWindow = jest.spyOn(window, "confirm");

const data = {
  state: {
    db: [
      {
        date: "2024-11-18",
        id: 1,
        name: "Task 1",
      },
      {
        date: "2020-11-18",
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
    const tableRow = screen.getByRole("row", {
      name: "Task 1 18/11/2024",
    });
    const editButton = within(tableRow).getByTestId("EditIcon");
    const formElement = screen.getByRole("form");

    const { name, date } = data.state.db[0];

    fireEvent.click(editButton);

    expect(formElement).toHaveFormValues({
      name,
      date,
    });
  });

  it("Should render CheckCircleIcon icon if the deadline of the task is not expired yet", () => {
    const tableRow = screen.getByRole("row", {
      name: "Task 1 18/11/2024",
    });
    const checkIcon = within(tableRow).queryByTestId("CheckCircleIcon");

    const { date } = data.state.db[0];

    /* Return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal.*/

    const isExpired = compareAsc(new Date(date), new Date());

    if (isExpired >= 0) {
      expect(checkIcon).toBeTruthy();
    } else {
      expect(checkIcon).toBeFalsy();
    }
  });

  it("Should render ErrorOutlineIcon icon if the deadline of the task is expired", () => {
    const tableRow = screen.getByRole("row", {
      name: "Task 2 18/11/2020",
    });
    const errorIcon = within(tableRow).queryByTestId("ErrorOutlineIcon");

    const { date } = data.state.db[1];

    const isExpired = compareAsc(new Date(date), new Date());

    if (isExpired < 0) {
      expect(errorIcon).toBeTruthy();
    } else {
      expect(errorIcon).toBeFalsy();
    }
  });

  it("Should be able to change table data when form is submitted when previously the edit button of the row was clicked", () => {
    const tableRow = screen.getByRole("row", {
      name: "Task 1 18/11/2024",
    });
    const tableCell = screen.getByRole("cell", {
      name: "Task 1",
    });

    const editButton = within(tableRow).getByTestId("EditIcon");
    const submitButton = screen.getByRole("button", { name: /send/i });

    const textInputElement = screen.getByPlaceholderText("Nombre");

    fireEvent.click(editButton);
    fireEvent.change(textInputElement, { target: { value: "Task finished" } });
    fireEvent.click(submitButton);

    expect(tableCell).toHaveTextContent("Task finished");
  });
});

describe("Componente Table (without beforeEach)", () => {
  it("Should remove the row when user clicks on delete(trash) button", async () => {
    const { rerender } = render(<MockedTableComponent data={data} />);

    const deleteButton = screen.getAllByTestId("DeleteIcon")[0].parentElement;
    const dbLength = data.state.db.length;

    fireEvent.click(deleteButton);

    // const spyCall = spyOnWindow.mockReturnValue(true);
    // spyCall();

    // if (spyCall()) {
    //   data.state.db.shift();
    // }

    // await rerender(<MockedTableComponent />);
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
