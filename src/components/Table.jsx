import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import TableButtons from './TableButtons';

function createData(name, date, id) {
    return { name, date, id };
}

const rows = [
    // createData('Cupcake', 305, 3.7),
    // createData('Donut', 452, 25.0),
    // createData('Eclair', 262, 16.0),
    // createData('Frozen yoghurt', 159, 6.0),
    // createData('Gingerbread', 356, 16.0),
    // createData('Honeycomb', 408, 3.2),
    // createData('Ice cream sandwich', 237, 9.0),
    // createData('Jelly Bean', 375, 0.0),
    // createData('KitKat', 518, 26.0),
    // // createData('Lollipop', 392, 0.2),
    // createData('Marshmallow', 318, 0),
    // createData('Nougat', 360, 19.0),
    // createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const blue = {
    200: '#A5D8FF',
    400: '#3399FF',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const Root = styled('div')(
    ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
    ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export default function Table() {
    const [filas, setFilas] = useState(rows);

    return (
        <Root sx={{ width: 500, maxWidth: '100%' }}>
            <table aria-label="custom pagination table">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filas.length === 0 ? <p>No hay tareas</p>
                        : filas.map((row) => (
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td style={{ width: 120 }} align="right">
                                    {row.date}
                                </td>
                                <td style={{ width: 120 }} align="right">
                                    <TableButtons />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Root>
    );
}
