import { useParams, Link, useNavigate } from "react-router-dom";
import SemesterGrid from "../components/SemesterGrid";

export default function Semester() {
        const { deptId, semId } = useParams();
        const navigate = useNavigate();

        if (!semId) {
                // Show semester grid if no semester selected
                return (
                        <div style={{ padding: "40px", textAlign: "center" }}>
                                <h1>{deptId.toUpperCase()} - Select Semester</h1>
                                <SemesterGrid
                                        semesters={[1, 2, 3, 4, 5, 6, 7, 8]}
                                        onSemesterClick={(sem) => navigate(`/department/${deptId}/semester/${sem}`)}
                                />
                        </div>
                );
        }

        // Show SGPA/CGPA options if semester is selected
        return (
                <div style={{ padding: "40px", textAlign: "center" }}>
                        <h2>Semester {semId}</h2>
                        <Link
                                to={`/department/${deptId}/semester/${semId}/calculator`}
                                style={{ margin: "10px", padding: "10px", background: "#0f172a", color: "#fff", borderRadius: "8px", textDecoration: "none" }}
                        >
                                SGPA Calculator
                        </Link>
                        <Link
                                to={`/department/${deptId}/semester/${semId}/calculator?type=cgpa`}
                                style={{ margin: "10px", padding: "10px", background: "#0f172a", color: "#fff", borderRadius: "8px", textDecoration: "none" }}
                        >
                                CGPA Calculator
                        </Link>
                </div>
        );
}