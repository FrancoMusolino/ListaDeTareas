import { useDateContext, useFormContext } from "../../context";
import { FORM_TYPES } from "../../actions";

const FormInput = ({ type, name, placeholder = "" }) => {
  const { dispatch, state: form } = useFormContext();
  const { dateToPrint } = useDateContext();

  const handleChange = (e) => {
    dispatch({
      type: FORM_TYPES.DETECTCHANGES,
      payload: { [e.target.name]: e.target.value },
    });
  };

  if (type === "date") {
    return (
      <input
        type={type}
        role={type}
        name={name}
        onChange={(e) => handleChange(e)}
        value={form.date}
        min={dateToPrint}
        max="2025-12-31"
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
      value={form.name}
    />
  );
};

export default FormInput;
