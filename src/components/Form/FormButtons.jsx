import {
  useFormContext,
  useTareasContext,
  useDateContext,
} from "../../context";
import { FORM_TYPES, TAREAS_TYPES } from "../../actions";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function FormButtons() {
  const { dateToPrint } = useDateContext();
  const { dispatch } = useTareasContext();
  const { dispatch: formDispatch, state: form } = useFormContext();
  const { name, date } = form;

  const handleSend = () => {
    if (!form.id) {
      form.id = Date.now();
      dispatch({ type: TAREAS_TYPES.SENDFORM, payload: form });
    } else {
      dispatch({
        type: TAREAS_TYPES.SENDFORMWITHCHANGES,
        payload: [form, form.id],
      });
    }
    handleClean();
  };

  const handleClean = () =>
    formDispatch({ type: FORM_TYPES.CLEAN_FORM, payload: dateToPrint });

  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      direction="row"
      spacing={2}
    >
      <Button
        onClick={handleClean}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Limpiar
      </Button>
      <Button
        disabled={!name.trim() || !date.trim()}
        type="submit"
        onClick={handleSend}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Stack>
  );
}

export default FormButtons;
