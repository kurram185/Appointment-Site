import React, { useState } from "react";
import "../styles/Dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion } from "react-bootstrap";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default function Dasboard({ prop }) {
  const [collapse, setCollapse] = useState(true);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const dataLine = {
    labels: labels,
    datasets: [
      {
        label: "Patients Statics",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const optionsLine = {
    plugins: { legend: true },
    scales: {
      y: {
        // min: 3,
        // max: 6
      },
    },
  };
  const data = {
    labels: ["Fever", "Flu", "Cough"],
    datasets: [{ data: [3, 6, 9], backgroundColor: ["blue", "red", "green"] }],
  };
  const options = {};
  return (
    <div>
      {/* <NavBar /> */}
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="card text-bg-primary m-5"
            style={{ maxWidth: "18rem" }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body">
              <h5 className="card-title">Patients For Today</h5>
              <h1 className="card-text">20</h1>
            </div>
          </div>
          <div
            className="card text-bg-secondary m-5"
            style={{ maxWidth: "18rem" }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body">
              <h5 className="card-title">Pending Patients</h5>
              <h1 className="card-text">5</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card text-bg-info m-5" style={{ maxWidth: "18rem" }}>
            {/* <div className="card-header">Header</div> */}
            <div className="card-body">
              <h5 className="card-title">Current Patient</h5>
              <h1 className="card-text">Ali</h1>
            </div>
          </div>
          <div
            className="card text-bg-success m-5"
            style={{ maxWidth: "18rem" }}
          >
            {/* <div className="card-header">Header</div> */}
            <div className="card-body">
              <h5 className="card-title">Completed Appointment</h5>
              <h1 className="card-text">10</h1>
            </div>
          </div>
        </div>
      </div>

      <Accordion>
        <Accordion.Item eventKey="0" className="item">
          <Accordion.Header>Patient Statics</Accordion.Header>
          <Accordion.Body>
            <Line data={dataLine} options={optionsLine}></Line>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="item">
          <Accordion.Header>Disease Statics</Accordion.Header>
          <Accordion.Body
            style={{
              display: "flex",
              padding: "20px",
              width: "100%",
              background: "#a3c2c2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="pie">
              <Pie data={data} options={options}></Pie>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
