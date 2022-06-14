const { render, screen, prettyDOM } = require("@testing-library/react");
import userEvent from "@testing-library/user-event";
import { DateProvider } from "context/Date";
import Form from "../components/Form";

const MockedFormComponent = () => {
  return (
    <DateProvider>
      <Form
        form={{
          name: "",
          date: "",
        }}
      />
    </DateProvider>
  );
};

describe("Componente Form", () => {
  beforeEach(() => {
    render(<MockedFormComponent />);
  });

  it("Should render in the document", () => {
    const formElement = screen.getByTestId("form");
    // console.log(prettyDOM(formElement));
    expect(formElement).toBeInTheDocument();
  });

  //   it("Should be able to type in input name", () => {
  //     const inputElement = screen.getByPlaceholderText("Nombre");
  //     userEvent.upload(inputElement, [], { target: { value: "Hola" } });
  //     console.log(prettyDOM(inputElement));
  //     expect(inputElement.value).toEqual("Hola");
  //   });
});
