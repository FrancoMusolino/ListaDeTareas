import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import TableButtons from './TableButtons';
import { TYPES } from '../actions/tareasActions';

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

export default function Table({ data, dispatch }) {
  const [filas, setFilas] = useState(data);

  useEffect(() => {
    setFilas(data);
  }, [data])

  const deleteRow = id => dispatch({ type: TYPES.DELETEROW, payload: id });

  return (
    <Root sx={{ width: 500, maxWidth: '100%' }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Vencimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filas.length === 0 ? <tr><td colSpan={3}>No hay tareas</td></tr>
            : filas.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td style={{ width: 120 }} align="right">
                  {row.date}
                </td>
                <td style={{ width: 120 }} align="right">
                  <TableButtons dispatch={dispatch} row={row} deleteRow={deleteRow} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Root>
  );
}
