import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TYPES } from '../actions/tareasActions';

export default function TableButtons({ row, dispatch, deleteRow }) {
    const { name, date, id } = row;

    const handleDelete = () => {
        let auth = window.confirm(`Desea eliminar la tarea: ${name}`)
        if (auth) {
            deleteRow(id);
        } else {
            return;
        }
    }

    const handleEdit = () => dispatch({ type: TYPES.EDITROW, payload: [name, date, id] });

    return (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <IconButton onClick={handleDelete} aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <div onClick={handleEdit} style={{ cursor: "pointer" }}>
                <IconButton aria-label="delete" disabled color="primary">
                    <EditIcon style={{ color: "#707070" }} />
                </IconButton>
            </div>
        </div>
    );
}