import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        {/* This is where child pages get rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
};
