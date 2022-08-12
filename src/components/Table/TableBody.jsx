import { useTareasContext } from "../../context";

import TableRow from "./TableRow";

const TableBody = () => {
  const {
    state: { db },
  } = useTareasContext();

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
