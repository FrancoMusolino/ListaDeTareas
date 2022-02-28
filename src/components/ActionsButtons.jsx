import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { TYPES } from '../actions/tareasActions'

function ActionsButtons({ form, dispatch }) {
  const handleSend = () => {
    if (!form.name || !form.date) {
      alert("Complete correctamente los datos");
    } else {
      dispatch({ tpye: TYPES.SENDFORM, payload: form });
      dispatch({ type: TYPES.DELETEFORM });
    }
  }

  const handleClean = () => dispatch({ type: TYPES.DELETEFORM });

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleClean} variant="outlined" startIcon={<DeleteIcon />}>
        Limpiar
      </Button>
      <Button onClick={handleSend} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}

export default ActionsButtons;