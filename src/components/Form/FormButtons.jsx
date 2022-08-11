import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { TYPES } from "../../actions/tareasActions";
import DateContext from "../../context/Date";
import TareasReducer from "../../context/TareasReducer";

function FormButtons({ form }) {
  const { name } = form;
  const { dateToPrint } = useContext(DateContext);
  const { dispatch } = useContext(TareasReducer);

  const handleSend = () => {
    if (!form.id) {
      form.id = Date.now();
      dispatch({ type: TYPES.SENDFORM, payload: form });
    } else {
      dispatch({ type: TYPES.SENDFORMWITHCHANGES, payload: [form, form.id] });
    }
    dispatch({ type: TYPES.UPDATEDATE, payload: dateToPrint });
  };

  const handleClean = () =>
    dispatch({ type: TYPES.UPDATEDATE, payload: dateToPrint });

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
        disabled={!name.trim()}
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
