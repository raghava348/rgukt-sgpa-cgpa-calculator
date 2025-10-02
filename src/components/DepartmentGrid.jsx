import DepartmentCard from "./DepartmentCard";

export default function DepartmentGrid({ departments, onDepartmentClick }) {
        // Manual row definitions
        const rows = [
                ["MPC", "MBIPC"],   // row 1
                ["CSE"],            // row 2
                ["ECE", "CIVIL"],   // row 3
                ["MECH", "MME"],    // row 4
                ["CHEMICAL", "EEE"] // row 5
        ];

        return (
                <div style={styles.container}>
                        {rows.map((row, i) => (
                                <div key={i} style={styles.row}>
                                        {row.map((dept) => (
                                                <button
                                                        key={dept}
                                                        onClick={() => onDepartmentClick(dept)}
                                                        style={{
                                                                padding: "20px 40px",
                                                                fontSize: "1.2rem",
                                                                background: "#11182c",
                                                                color: "#fff",
                                                                border: "none",
                                                                borderRadius: "10px",
                                                                cursor: "pointer"
                                                        }}
                                                >
                                                        {dept}
                                                </button>
                                        ))}
                                </div>
                        ))}
                </div>
        );
}

const styles = {
        container: {
                maxWidth: "900px",
                margin: "20px auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
        },
        row: {
                display: "flex",
                justifyContent: "center", // ✅ keeps them centered
                gap: "20px",
        },

};
