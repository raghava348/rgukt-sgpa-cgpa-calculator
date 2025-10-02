import { useParams, useNavigate } from "react-router-dom";
import SemesterGrid from "../components/SemesterGrid";

export default function Department() {
        const { deptId } = useParams();
        const navigate = useNavigate();

        const handleSemesterClick = (sem) => {
                if (deptId?.toUpperCase() === "CSE" && sem === 1) {
                        navigate(`/department/${deptId}/semester/${sem}/calculator`);
                } else {
                        navigate(`/department/${deptId}/semester/${sem}`);
                }
        };

        return (
                <div style={{ padding: "40px", textAlign: "center" }}>
                        <h1>{deptId.toUpperCase()} - Select Semester</h1>
                        <SemesterGrid
                                semesters={[1, 2, 3, 4, 5, 6, 7, 8]}
                                onSemesterClick={handleSemesterClick}
                        />
                </div>
        );
}