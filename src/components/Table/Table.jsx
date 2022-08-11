import React from "react";
import TableBody from "./TableBody";
import TableStatus from "./TableStatus";
import { Root } from "./TableStyles";

export default function Table() {
  return (
    <Root sx={{ width: 500, maxWidth: "100%" }}>
      <table data-testid="table" aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Vencimiento</th>
            <th style={{ textAlign: "center" }}>Acciones</th>
            <th style={{ textAlign: "center" }}>Estado</th>
          </tr>
        </thead>
        <TableBody />
      </table>

      <TableStatus />
    </Root>
  );
}
