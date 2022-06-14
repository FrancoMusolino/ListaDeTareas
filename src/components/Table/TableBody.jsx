import React, { useContext } from "react";
import TareasReducer from "../../context/TareasReducer";
import TableRow from "./TableRow";

const TableBody = () => {
  const {
    state: { db },
  } = useContext(TareasReducer);

  return (
    <tbody>
      {db.length === 0 ? (
        <tr>
          <td colSpan={4}>No hay tareas</td>
        </tr>
      ) : (
        db.map((row) => <TableRow key={row.id} {...row} />)
      )}
    </tbody>
  );
};

export default TableBody;
