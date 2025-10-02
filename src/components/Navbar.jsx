import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>RGUKT Calculator</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    background: "#0f172a",
    color: "white",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // ✅ allows wrapping on mobile
  },
  logo: { margin: 0, fontSize: "18px" },
  nav: { display: "flex", gap: "15px", flexWrap: "wrap" },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
};
