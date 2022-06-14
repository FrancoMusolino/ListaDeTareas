import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TYPES } from "../../actions/tareasActions";
import TareasReducer from "src/context/TareasReducer";

export default function TableButtons({ name, date, id }) {
  const { dispatch } = useContext(TareasReducer);

  const handleDelete = () => {
    let auth = window.confirm(`Desea eliminar la tarea: ${name}`);
    if (auth) {
      dispatch({ type: TYPES.DELETEROW, payload: id });
    } else {
      return;
    }
  };

  const handleEdit = () =>
    dispatch({ type: TYPES.EDITROW, payload: [name, date, id] });

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <IconButton onClick={handleDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <div onClick={handleEdit} style={{ cursor: "pointer" }}>
        <IconButton aria-label="delete" color="primary">
          <EditIcon />
        </IconButton>
      </div>
    </div>
  );
}
