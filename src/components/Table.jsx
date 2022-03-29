import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/system';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TableButtons from './TableButtons';
import { TYPES } from '../actions/tareasActions';
import DateContext from '../context/Date';

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
  const { dateToPrint } = useContext(DateContext);

  useEffect(() => {
    setFilas(data);
  }, [data])

  const deleteRow = id => dispatch({ type: TYPES.DELETEROW, payload: id });

  return (
    <Root sx={{ width: 500, maxWidth: '100%' }}>
      <table aria-label="custom pagination table">
        <thead >
          <tr>
            <th >Tarea</th>
            <th>Vencimiento</th>
            <th style={{ textAlign: "center" }}>Acciones</th>
            <th style={{ textAlign: "center" }}>Estado</th>
          </tr>
        </thead>
        {filas.length === 0 ? <tr><td colSpan={3}>No hay tareas</td></tr>
          : filas.map((row) => (
            <tbody>
              <tr key={row.id}>
                <td>{row.name}</td>
                <td align="right">
                  {row.date}
                </td>
                <td align="right">
                  <TableButtons dispatch={dispatch} row={row} deleteRow={deleteRow} />
                </td>
                <td style={{ textAlign: "center" }}>
                  {
                    dateToPrint > row.date ? <ErrorOutlineIcon style={{ color: "red" }} /> :
                      <CheckCircleIcon color='success' />
                  }
                </td>
              </tr>
            </tbody>
          ))}
      </table>

      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <ErrorOutlineIcon style={{ color: "red" }} />
          <p style={{ fontSize: "15px" }}>Tarea vencida</p>
        </div>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <CheckCircleIcon color='success' />
          <p style={{ fontSize: "15px" }}>Tarea en fecha</p>
        </div>
      </div>
    </Root >
  );
}
