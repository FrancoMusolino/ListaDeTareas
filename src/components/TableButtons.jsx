import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableButtons() {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <EditIcon style={{ color: "#707070" }} />
            </IconButton>
        </Stack>
    );
}