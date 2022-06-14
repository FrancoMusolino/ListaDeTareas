import React, { useContext } from "react";
import { TYPES } from "../../actions/tareasActions";
import TareasReducer from "../../context/TareasReducer";
import DateContext from "../../context/Date";

const FormInput = ({ type, name, placeholder = "", value }) => {
  const { dateToPrint } = useContext(DateContext);
  const { dispatch } = useContext(TareasReducer);

  const handleChange = (e) =>
    dispatch({
      type: TYPES.DETECTCHANGES,
      payload: [e.target.name, e.target.value],
    });

  if (type === "date") {
    return (
      <input
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
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
      value={value}
    />
  );
};

export default FormInput;
