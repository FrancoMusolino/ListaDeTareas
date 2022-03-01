import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableButtons({ row, deleteRow, handleEdit }) {
    const { id, name, date } = row;

    const handleDelete = () => {
        let auth = window.confirm(`Desea eliminar la fila con el id ${id}`)
        if (auth) {
            deleteRow(id);
        } else {
            return;
        }
    }

    return (
        <Stack direction="row" spacing={1}>
            <IconButton onClick={handleDelete} aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleEdit} aria-label="delete" disabled color="primary">
                <EditIcon style={{ color: "#707070" }} />
            </IconButton>
        </Stack>
    );
}