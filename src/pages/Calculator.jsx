import { useParams } from "react-router-dom";
import PucCalculator from "../components/PucCalculator";
import MbipcCalculator from "../components/MbipcCalculator";
import CseSem1Calculator from "../components/CseSem1Calculator";

export default function Calculator() {
        const { deptId, semId } = useParams();
        console.log("deptId:", deptId, "semId:", semId);

        if (deptId === "MPC") {
                return <PucCalculator />;
        }
        if (deptId === "MBIPC") {
                return <MbipcCalculator />;
        }
        if (deptId?.toUpperCase() === "CSE" && semId === "1") {
                return <CseSem1Calculator />;
        }
        return <div>Calculator for {deptId} Semester {semId}</div>;
}
