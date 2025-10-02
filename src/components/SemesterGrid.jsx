export default function SemesterGrid({ semesters, onSemesterClick }) {
        // Group semesters into rows of 2
        const rows = [];
        for (let i = 0; i < semesters.length; i += 2) {
                rows.push(semesters.slice(i, i + 2));
        }

        return (
                <div style={styles.container}>
                        {rows.map((row, i) => (
                                <div key={i} style={styles.row}>
                                        {row.map((sem) => (
                                                <button
                                                        key={sem}
                                                        onClick={() => onSemesterClick(sem)}
                                                        style={{
                                                                padding: "16px 32px",
                                                                fontSize: "1.1rem",
                                                                background: "#2563eb",
                                                                color: "#fff",
                                                                border: "none",
                                                                borderRadius: "8px",
                                                                cursor: "pointer",
                                                        }}
                                                >
                                                        Semester {sem}
                                                </button>
                                        ))}
                                </div>
                        ))}
                </div>
        );
}

const styles = {
        container: {
                maxWidth: "600px",
                margin: "20px auto",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
        },
        row: {
                display: "flex",
                justifyContent: "center",
                gap: "16px",
        },
};