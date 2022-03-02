import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { TYPES } from '../actions/tareasActions'
import DateContext from '../context/Date';

function ActionsButtons({ form, dispatch }) {
  const { name, date } = form;
  const { dateToPrint } = useContext(DateContext);

  const handleSend = () => {
    if (!name.trim() || !date.trim()) {
      alert("Complete correctamente todos los datos");
      return;
    } else {
      if (!form.id) {
        form.id = Date.now();
        dispatch({ type: TYPES.SENDFORM, payload: form });
      } else {
        dispatch({ type: TYPES.SENDFORMWITHCHANGES, payload: [form, form.id] });
      }
      dispatch({ type: TYPES.UPDATEDATE, payload: dateToPrint })
    }
  }

  const handleClean = () => dispatch({ type: TYPES.UPDATEDATE, payload: dateToPrint });


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