import React, { useContext } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TableButtons from "./TableButtons";
import DateContext from "../../context/Date";

const TableRow = (props) => {
  const { dateToPrint } = useContext(DateContext);

  return (
    <tr>
      <td>{props.name}</td>
      <td align="right">{props.date.split("-").reverse().join("/")}</td>
      <td align="right">
        <TableButtons {...props} />
      </td>
      <td style={{ textAlign: "center" }}>
        {dateToPrint > props.date ? (
          <ErrorOutlineIcon style={{ color: "red" }} />
        ) : (
          <CheckCircleIcon color="success" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
