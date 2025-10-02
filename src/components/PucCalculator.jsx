import React, { useState } from "react";

const subjects = [
        { id: "PHYSICS", label: "PHYSICS" },
        { id: "CHEMISTRY", label: "CHEMISTRY" },
        { id: "MATHS", label: "MATHS" },
        { id: "IT", label: "IT" },
        { id: "ENG", label: "ENG" },
        { id: "TELUGU", label: "TELUGU" },
        { id: "PHYSICS-LAB", label: "PHYSICS LAB" },
        { id: "CHEMISTRY-LAB", label: "CHEMISTRY LAB" },
        { id: "IT-LAB", label: "IT LAB" },
];

const gradeOptions = {
        default: [
                { value: 0, label: "EX" },
                { value: 4, label: "A" },
                { value: 8, label: "B" },
                { value: 12, label: "C" },
                { value: 16, label: "D" },
                { value: 20, label: "E" },
        ],
        MATHS: [
                { value: 0, label: "EX" },
                { value: 5, label: "A" },
                { value: 10, label: "B" },
                { value: 15, label: "C" },
                { value: 20, label: "D" },
                { value: 25, label: "E" },
        ],
        IT: [
                { value: 0, label: "EX" },
                { value: 1, label: "A" },
                { value: 2, label: "B" },
                { value: 3, label: "C" },
                { value: 4, label: "D" },
                { value: 5, label: "E" },
        ],
        ENG: [
                { value: 0, label: "EX" },
                { value: 3, label: "A" },
                { value: 6, label: "B" },
                { value: 9, label: "C" },
                { value: 12, label: "D" },
                { value: 15, label: "E" },
        ],
        TELUGU: [
                { value: 0, label: "EX" },
                { value: 3, label: "A" },
                { value: 6, label: "B" },
                { value: 9, label: "C" },
                { value: 12, label: "D" },
                { value: 15, label: "E" },
        ],
        "PHYSICS-LAB": [
                { value: 0, label: "EX" },
                { value: 1, label: "A" },
                { value: 2, label: "B" },
                { value: 3, label: "C" },
                { value: 4, label: "D" },
                { value: 5, label: "E" },
        ],
        "CHEMISTRY-LAB": [
                { value: 0, label: "EX" },
                { value: 1, label: "A" },
                { value: 2, label: "B" },
                { value: 3, label: "C" },
                { value: 4, label: "D" },
                { value: 5, label: "E" },
        ],
        "IT-LAB": [
                { value: 0, label: "EX" },
                { value: 1, label: "A" },
                { value: 2, label: "B" },
                { value: 3, label: "C" },
                { value: 4, label: "D" },
                { value: 5, label: "E" },
        ],
};

export default function PucCalculator() {
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
                const sgpaValue = (240 - sum) / 24;
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
                        <h1 className="text-2xl font-bold mb-4 text-center">PUC SGPA Calculator</h1>
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
                                                        {(gradeOptions[subject.id] || gradeOptions.default).map((opt) => (
                                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
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