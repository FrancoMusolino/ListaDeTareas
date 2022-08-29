import "./Form.css";
import FormButtons from "./FormButtons";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <form
      aria-label="form"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput type="text" name="name" placeholder="Nombre" />
      <FormInput type="date" name="date" />
      <FormButtons />
    </form>
  );
};

export default Form;
