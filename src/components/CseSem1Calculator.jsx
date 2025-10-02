import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./CseSem1Calculator.css"; // import CSS file

export default function CseSem1Calculator() {
  const chartRef = useRef(null);
  const [sgpa, setSgpa] = useState(null);

  const subjects = [
    { id: "PSPC", label: "PSPC", credits: 4 },
    { id: "BEEE", label: "BEEE", credits: 4 },
    { id: "C&LA", label: "C&LA", credits: 4 },
    { id: "PSPCLAB", label: "PSPC LAB", credits: 1.5 },
    { id: "BEEELAB", label: "BEEE LAB", credits: 1.5 },
    { id: "ENGLISH", label: "English", credits: 2.5 },
    { id: "EGCD", label: "EGCD", credits: 2.5 }
  ];

  // Chart initialization (same as your code)
  useEffect(() => {
    const ctx = document.getElementById("gradeDistributionChart")?.getContext("2d");
    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["EX", "A", "B", "C", "D", "E"],
          datasets: [
            {
              label: "Grade Distribution",
              data: [0, 0, 0, 0, 0, 0],
              backgroundColor: [
                "rgba(34,197,94,0.6)",
                "rgba(59,130,246,0.6)",
                "rgba(234,179,8,0.6)",
                "rgba(249,115,22,0.6)",
                "rgba(244,63,94,0.6)",
                "rgba(107,114,128,0.6)"
              ]
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }
  }, []);

  // same grade calculation logic as your code...
  const getGradeLetter = (value) => {
    const gradeMapping = {
      0: "EX",
      4: "A",
      8: "B",
      12: "C",
      16: "D",
      20: "E"
    };
    return gradeMapping[value] || "EX";
  };

  const calculateCGPA = () => {
    let totalCreditsLost = 0;
    let gradeDistribution = { EX: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };

    subjects.forEach((subject) => {
      let gradeValue = parseFloat(document.getElementById(subject.id).value);
      totalCreditsLost += gradeValue;
      let gradeLetter = getGradeLetter(gradeValue);
      gradeDistribution[gradeLetter]++;
    });

    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [
        gradeDistribution.EX,
        gradeDistribution.A,
        gradeDistribution.B,
        gradeDistribution.C,
        gradeDistribution.D,
        gradeDistribution.E
      ];
      chartRef.current.update();
    }

    let calculatedSgpa = (200 - totalCreditsLost) / 20;
    setSgpa(calculatedSgpa.toFixed(3));
  };

  useEffect(() => {
    calculateCGPA();
  }, []);

  return (
    <div className="container">
      <h1 className="title">CSE SEM-01 SGPA Calculator</h1>

      <div className="grid">
        <fieldset className="form-box">
          <legend className="legend">Enter Grades</legend>
          <div className="form-fields">
            {subjects.map((subject) => (
              <div key={subject.id} className="form-row">
                <label htmlFor={subject.id} className="label">{subject.label}</label>
                <select id={subject.id} onChange={calculateCGPA} className="select">
                  <option value="0">EX</option>
                  <option value="4">A</option>
                  <option value="8">B</option>
                  <option value="12">C</option>
                  <option value="16">D</option>
                  <option value="20">E</option>
                </select>
              </div>
            ))}
          </div>

          {sgpa && (
            <div className={`sgpa-box ${sgpa >= 9 ? "good" : sgpa >= 7 ? "average" : "bad"}`}>
              Your SGPA is: <strong>{sgpa}</strong>
            </div>
          )}
        </fieldset>

        <div className="chart-box">
          <h2 className="chart-title">Grade Distribution</h2>
          <canvas id="gradeDistributionChart" height="300"></canvas>
        </div>
      </div>
    </div>
  );
}
