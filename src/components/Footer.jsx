import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Link to="/">Home</Link> | 
      <Link to="/about"> About</Link> | 
      <Link to="/contact"> Contact</Link> | 
      <Link to="/privacy"> Privacy Policy</Link> | 
      <Link to="/terms"> Terms & Conditions</Link> | 
      <Link to="/blog"> Blog & FAQ's</Link>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "15px",
    background: "black",
    color: "white",
                textAlign: "center",
    position: "fixed",       // <-- stays at the bottom of the page if content is short
    bottom: 0,
    left: 0,
    right: 0,
                fontSize: "14px",
                
    
  }
};
