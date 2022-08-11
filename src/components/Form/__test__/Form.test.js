const {
  render,
  screen,
  fireEvent,
  createEvent,
} = require("@testing-library/react");
import Form from "../Form";
import { MockedFormComponent } from "./mocks/MockedComponent";

describe("Componente Form", () => {
  beforeEach(() => {
    render(
      <MockedFormComponent>
        <Form />
      </MockedFormComponent>
    );
  });

  it("Should render in the document", () => {
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  it("Should prevent default on form submit", () => {
    const formElement = screen.getByTestId("form");
    const sendFormEvent = createEvent.submit(formElement);
    fireEvent(formElement, sendFormEvent);

    expect(sendFormEvent.defaultPrevented).toBe(true);
  });

  it("Should be able to type in input name", () => {
    const inputElement = screen.getByPlaceholderText("Nombre");
    fireEvent.change(inputElement, { target: { value: "Terminar React" } });
    expect(inputElement.value).toEqual("Terminar React");
  });

  it("Should be able to clean the input value on click in button 'Limpiar'", () => {
    const buttonElement = screen.getByText("Limpiar");
    const inputElement = screen.getByPlaceholderText("Nombre");

    fireEvent.change(inputElement, { target: { value: "Terminar React" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toEqual("");
  });

  it("Should be able to clean the input value on click in button 'Send'", () => {
    const buttonElement = screen.getByText("Send");
    const inputElement = screen.getByPlaceholderText("Nombre");

    fireEvent.change(inputElement, { target: { value: "Terminar React" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toEqual("");
  });

  it("The button 'send' should be disable if there is not a value", () => {
    const buttonElement = screen.getByText("Send");
    const inputElement = screen.getByPlaceholderText("Nombre");

    expect(buttonElement).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: "Terminar React" } });

    expect(buttonElement).toBeEnabled();
  });
});
