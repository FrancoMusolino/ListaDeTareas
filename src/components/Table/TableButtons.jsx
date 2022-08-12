import { useTareasContext, useFormContext } from "../../context";
import { TAREAS_TYPES, FORM_TYPES } from "../../actions";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TableButtons({ name, date, id }) {
  const { dispatch } = useTareasContext();
  const { dispatch: formDispatch } = useFormContext();

  // console.log(formDispatch);

  const handleDelete = () => {
    let auth = window.confirm(`Desea eliminar la tarea: ${name}`);
    if (auth) {
      dispatch({ type: TAREAS_TYPES.DELETEROW, payload: id });
    }
  };

  const handleEdit = () =>
    formDispatch({ type: FORM_TYPES.EDITROW, payload: { name, date, id } });

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
