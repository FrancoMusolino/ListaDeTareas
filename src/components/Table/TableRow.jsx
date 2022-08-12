import { useDateContext } from "../../context/DateContext";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import TableButtons from "./TableButtons";

const TableRow = ({ name, date, id }) => {
  const { dateToPrint } = useDateContext();

  return (
    <tr>
      <td>{name}</td>
      <td align="right">{date.split("-").reverse().join("/")}</td>
      <td align="right">
        <TableButtons name={name} date={date} id={id} />
      </td>
      <td style={{ textAlign: "center" }}>
        {dateToPrint > date ? (
          <ErrorOutlineIcon style={{ color: "red" }} />
        ) : (
          <CheckCircleIcon color="success" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
