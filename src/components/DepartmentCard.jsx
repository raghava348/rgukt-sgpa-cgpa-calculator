import { Link } from "react-router-dom";

export default function DepartmentCard({ dept }) {
  return (
    <Link to={`/department/${dept.toLowerCase()}`} style={styles.card}>
      {dept}
    </Link>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80px",
    width: "140px",      // ✅ fixed width ensures 2 per row on all devices
    borderRadius: "8px",
    background: "#0f172a",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease, background 0.3s ease",
  },
};
