import React, { useState } from "react";

const subjects = [
        { id: "MATHS", label: "MATHS", options: [0, 5, 10, 15, 20, 25] },
        { id: "PHYSICS", label: "PHYSICS", options: [0, 4, 8, 12, 16, 20] },
        { id: "CHEMISTRY", label: "CHEMISTRY", options: [0, 4, 8, 12, 16, 20] },
        { id: "BIOLOGY", label: "BIOLOGY", options: [0, 3, 6, 9, 12, 15] },
        { id: "IT", label: "IT", options: [0, 2, 4, 6, 8, 10] },
        { id: "ENG", label: "ENG", options: [0, 3, 6, 9, 12, 15] },
        { id: "TELUGU", label: "TELUGU", options: [0, 3, 6, 9, 12, 15] },
        { id: "PHYSICS-LAB", label: "PHYSICS LAB", options: [0, 1, 2, 3, 4, 5] },
        { id: "CHEMISTRY-LAB", label: "CHEMISTRY LAB", options: [0, 1, 2, 3, 4, 5] },
        { id: "IT-LAB", label: "IT LAB", options: [0, 1, 2, 3, 4, 5] },
        { id: "BIOLOGY-LAB", label: "BIOLOGY LAB", options: [0, 1, 2, 3, 4, 5] },
];

export default function MbipcCalculator() {
        const [grades, setGrades] = useState({});
        const [sgpa, setSgpa] = useState(null);
        const [message, setMessage] = useState("");

        const handleChange = (subject, value) => {
                setGrades({ ...grades, [subject]: Number(value) });
        };

        const calculateSGPA = () => {
                let sum = 0;
                subjects.forEach((subject) => {
                        sum += Number(grades[subject.id] || 0);
                });
                const sgpaValue = (280 - sum) / 28;
                setSgpa(sgpaValue.toFixed(3));
                let msg = "";
                if (sgpaValue >= 8) msg = "Congratulations! You have Passed with Distinction.";
                else if (sgpaValue >= 7) msg = "Congratulations! You have Passed with First Class Division.";
                else if (sgpaValue >= 6) msg = "Congratulations! You have Passed with Second Class Division.";
                else msg = "Sorry! You have Failed.";
                setMessage(msg);
        };

        return (
                <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                        <h1 className="text-2xl font-bold mb-4 text-center">PUC I&II (MBiPC) SGPA Calculator</h1>
                        <form>
                                {subjects.map((subject) => (
                                        <div key={subject.id} className="mb-3 flex items-center justify-between">
                                                <label htmlFor={subject.id} className="font-semibold w-40">{subject.label}</label>
                                                <select
                                                        id={subject.id}
                                                        value={grades[subject.id] || 0}
                                                        onChange={(e) => handleChange(subject.id, e.target.value)}
                                                        className="border p-2 rounded-lg"
                                                >
                                                        {subject.options.map((opt) => (
                                                                <option key={opt} value={opt}>{opt === 0 ? "EX" : opt}</option>
                                                        ))}
                                                </select>
                                        </div>
                                ))}
                                <button
                                        type="button"
                                        onClick={calculateSGPA}
                                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold"
                                >
                                        Calculate SGPA
                                </button>
                        </form>
                        {sgpa && (
                                <div className="mt-6 text-center">
                                        <div className="text-xl font-bold">Your SGPA is: <span className="cgpa-score">{sgpa}</span> / 10</div>
                                        <div className="mt-2 font-semibold">{message}</div>
                                </div>
                        )}
                </div>
        );
}