const {
  render,
  screen,
  fireEvent,
  createEvent,
  prettyDOM,
} = require("@testing-library/react");

import { MockedFormComponent } from "./mocks/MockedComponent";
import { normalizedDate } from "../../../utils";

import Form from "../Form";

describe("Componente Form", () => {
  beforeEach(() => {
    render(
      <MockedFormComponent>
        <Form />
      </MockedFormComponent>
    );
  });

  it("Should render in the document", () => {
    const formElement = screen.getByRole("form");
    // console.log(prettyDOM(formElement));

    expect(formElement).toBeInTheDocument();
  });

  it("Should prevent default on form submit", () => {
    const formElement = screen.getByRole("form");
    const sendFormEvent = createEvent.submit(formElement);
    fireEvent(formElement, sendFormEvent);

    expect(sendFormEvent.defaultPrevented).toBe(true);
  });

  it("Should be able to type in input name", () => {
    const inputElement = screen.getByPlaceholderText("Nombre");
    fireEvent.change(inputElement, { target: { value: "Terminar React" } });
    expect(inputElement.value).toEqual("Terminar React");
  });

  it("Should clean the input value on click on button 'Limpiar'", () => {
    const buttonElement = screen.getByText("Limpiar");
    const inputElement = screen.getByPlaceholderText("Nombre");

    fireEvent.change(inputElement, { target: { value: "Terminar React" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toEqual("");
  });

  it("Should clean the input value on click on button 'Send'", () => {
    const buttonElement = screen.getByText("Send");
    const inputElement = screen.getByPlaceholderText("Nombre");

    fireEvent.change(inputElement, { target: { value: "Terminar React" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toEqual("");
  });

  it("The button 'send' should be disable if there is not a value", () => {
    const buttonElement = screen.getByText("Send");
    const textInputElement = screen.getByPlaceholderText("Nombre");
    const dateInputElement = screen.getByRole("date");

    expect(buttonElement).toBeDisabled();

    fireEvent.change(dateInputElement, { target: { value: "" } });

    fireEvent.change(textInputElement, { target: { value: "Terminar React" } });

    expect(buttonElement).toBeDisabled();

    fireEvent.change(dateInputElement, { target: { value: "2025-11-20" } });

    expect(buttonElement).toBeEnabled();
  });

  it("The user should not choose a past date", () => {
    const dateInputElement = screen.getByRole("date");

    expect(dateInputElement).toHaveAttribute("min", normalizedDate);
  });
});
