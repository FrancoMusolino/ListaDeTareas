import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { TYPES } from '../actions/tareasActions'

function ActionsButtons({ form, dispatch }) {
  const { name, date } = form;

  const handleSend = () => {
    let regexDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

    if (!name.trim() || !date.trim()) {
      alert("Complete correctamente todos los datos");
      return;
    } else if (!regexDate.test(date.trim())) {
      alert("El campo fecha solo acepta números que hagan referencia al día, mes y año")
      return;
    } else {
      if (!form.id) {
        form.id = Date.now();
      } else {
        alert('Ya tiene id')
      }
      dispatch({ type: TYPES.SENDFORM, payload: form });
      dispatch({ type: TYPES.DELETEFORM });
    }
  }

  const handleClean = () => dispatch({ type: TYPES.DELETEFORM });

  return (
    <Stack style={{ display: "flex", justifyContent: "center" }} direction="row" spacing={2}>
      <Button onClick={handleClean} variant="outlined" startIcon={<DeleteIcon />}>
        Limpiar
      </Button>
      <Button onClick={handleSend} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack >
  );
}

export default ActionsButtons;