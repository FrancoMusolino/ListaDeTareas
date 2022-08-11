const {
  render,
  screen,
  fireEvent,
  createEvent,
  prettyDOM,
} = require("@testing-library/react");
import Table from "../Table";
import { MockedTableComponent } from "./mocks/MockedComponent";

describe("Componente Table", () => {
  beforeEach(() => {
    render(
      <MockedTableComponent>
        <Table />
      </MockedTableComponent>
    );
  });

  it("Should render in the document", () => {
    const tableElement = screen.getByTestId("table");
    // console.log(prettyDOM(tableElement));

    expect(tableElement).toBeInTheDocument();
  });

  //   it("Should render a message if the table is empty", () => {
  //     const emptyMessage = screen.getByText("No hay tareas");
  //     console.log(prettyDOM(emptyMessage));

  //     expect(emptyMessage).toBeVisible();
  //   });
});
