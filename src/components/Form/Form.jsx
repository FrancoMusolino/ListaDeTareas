import React, { useContext } from "react";
import TareasReducer from "src/context/TareasReducer";
import "./Form.css";
import FormButtons from "./FormButtons";
import FormInput from "./FormInput";

const Form = () => {
  const {
    state: { form },
  } = useContext(TareasReducer);

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <FormInput
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
      />
      <FormInput type="date" name="date" value={form.date} />
      <FormButtons form={form} />
    </form>
  );
};

export default Form;
