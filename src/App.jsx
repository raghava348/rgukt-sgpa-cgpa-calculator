import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Department from "./pages/Department";
import Semester from "./pages/Semester";
import Calculator from "./pages/Calculator";


export default function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <Navbar />

        {/* Main content */}
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100vw",
            boxSizing: "border-box",
            background: "linear-gradient(to right, #dbeafe, #e0f2fe)", // add this line
          }}
        >
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/department/:deptId" element={<Department />} />
              <Route path="/department/:deptId/semester/:semId" element={<Semester />} />
              <Route
                path="/department/:deptId/semester/:semId/calculator"
                element={<Calculator />}
              />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}