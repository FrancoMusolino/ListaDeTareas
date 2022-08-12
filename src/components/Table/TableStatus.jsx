import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TableStatus = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <ErrorOutlineIcon style={{ color: "red" }} />
        <p style={{ fontSize: "15px" }}>Tarea vencida</p>
      </div>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <CheckCircleIcon color="success" />
        <p style={{ fontSize: "15px" }}>Tarea en fecha</p>
      </div>
    </div>
  );
};

export default TableStatus;
