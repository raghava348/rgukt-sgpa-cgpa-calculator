// Landing.jsx
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DepartmentGrid from "../components/DepartmentGrid";

export default function Landing() {
        const departments = [
                "MPC", "MBIPC", "CSE", "ECE",
                "CIVIL", "MECH", "MME", "CHEMICAL", "EEE"
        ];
        const navigate = useNavigate();

        // Handler for department click
        const handleDepartmentClick = (dept) => {
                if (dept === "MPC" || dept === "MBIPC") {
                        // Directly go to calculator for semester 1 (or change as needed)
                        navigate(`/department/${dept}/semester/1/calculator`);
                } else {
                        // Go to department page
                        navigate(`/department/${dept}`);
                }
        };

        return (
                <div style={styles.container}>
                        <div style={styles.content}>
                                {/* <div style={styles.hero}>
                        <h1>Welcome to RGUKT SGPA & CGPA Calculator</h1>
                        <p>Select your department and semester to get started</p>
                </div> */}

                                <SearchBar />

                                <h2 style={styles.title}>Select Department</h2>
                                <DepartmentGrid departments={departments} onDepartmentClick={handleDepartmentClick} />
                        </div>
                </div>
        );
}

const styles = {
        container: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "calc(100vh - 120px)", // full screen minus header+footer
                background: "linear-gradient(to right, #dbeafe, #e0f2fe)",
                width: "100%",
                boxSizing: "border-box",
        },
        content: {

                width: "100%",
                maxWidth: "600px", // limits content width for better alignment
                margin: "0 auto",
                textAlign: "center",
                boxSizing: "border-box",
                padding: "50px",
        },
        hero: {
                marginBottom: "10px",
        },
        title: {
                margin: "20px 0",
                color: "#4f46e5",
        },
};
