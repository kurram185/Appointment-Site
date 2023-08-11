import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AppointementForm() {
  const currentYear = new Date().getFullYear();
  const [value, onChange] = useState(new Date());
  const pastYears = 50;
  return (
    <div
      className="container d-flex justify-content-center flex-column align-items-center  p-3"
      style={{ background: "white", borderRadius: "10px", height: "100%" }}
    >
      <div className=" d-flex justify-content-center flex-column align-items-center ">
        <h1>Doctor Appointment Request Form</h1>
        <h4>
          Fill the form below wisely to book an appointment and we will notify
          you about your appointment.
        </h4>
      </div>
      <form>
        <h5>Name</h5>
        <div className="d-flex  justify-content-between">
          <div className="mr-3">
            <input type="text" className="form-control" />
            <label>First Name</label>
          </div>
          <div className="ml-3">
            <input type="text" className="form-control" />
            <label>Last Name</label>
          </div>
        </div>
        <h5>Date of Birth</h5>
        <div className="d-flex  justify-content-between">
          <div className="mr-3">
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                style={{
                  background: "white",
                  width: "150px",
                  border: "1px #ebebe0 solid",
                }}
              >
                Date
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ height: "300px", overflowY: "auto" }}>
                {Array.from({ length: 31 }, (_, index) => (
                  <Dropdown.Item key={index + 1}>{index + 1}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <label>Date</label>
          </div>
          <div className="ml-3 mr-3">
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                style={{
                  background: "white",
                  width: "150px",
                  border: "1px #ebebe0 solid",
                }}
              >
                Month
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ height: "300px", overflowY: "auto" }}>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m) => (
                  <Dropdown.Item>{m}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <label>Month</label>
          </div>
          <div className="ml-3">
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                style={{
                  background: "white",
                  width: "150px",
                  border: "1px #ebebe0 solid",
                }}
              >
                Year
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ height: "300px", overflowY: "auto" }}>
                {Array.from({ length: pastYears + 1 }, (_, index) => (
                  <Dropdown.Item>{currentYear - index}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <label>Year</label>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Gender</h5>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                style={{
                  background: "white",
                  width: "150px",
                  border: "1px #ebebe0 solid",
                }}
              >
                Gender
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Male</Dropdown.Item>
                <Dropdown.Item>Female</Dropdown.Item>
                <Dropdown.Item>Prefer Not say</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <h5>Phone Number</h5>
            <input
              type="tel"
              className="form-control"
              placeholder="+92**********"
              maxLength={13}
            />
          </div>
        </div>

        <h5>Address</h5>
        <input type="text" className="form-control" />
        <label>Address</label>
        <div className="d-flex justify-content-between">
          <div>
            <input type="text" className="form-control" />
            <label>City</label>
          </div>
          <div>
            <input type="text" className="form-control" />
            <label>State/Province</label>
          </div>
        </div>
        <div className="my-5">
          <h5>Email</h5>
          <input
            type="email"
            className="form-control w-50"
            placeholder="example@example.com"
          />
        </div>
        <div>
          <h5>Have you ever applied to our service before?</h5>
          <div className="d-flex flex-row justify-content-evenly">
            <div className="form-check ">
              <input type="radio" className="form-check-input" />
              <label className="from-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" />
              <label className="from-check-label">No</label>
            </div>
          </div>
        </div>
        <div>
          <h5>Which procedure do you want to make an appointment for?</h5>
          <Dropdown>
            <Dropdown.Toggle
              variant=""
              style={{
                background: "white",
                width: "150px",
                border: "1px #ebebe0 solid",
              }}
            >
              Select
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Medical Examination</Dropdown.Item>
              <Dropdown.Item>Result Analysis</Dropdown.Item>
              <Dropdown.Item>Doctor Check</Dropdown.Item>
              <Dropdown.Item>Check-Up</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h5>Choose the appointment date</h5>
          <input
            type="text"
            disabled
            value={value}
            className="form-control"
            style={{ background: "white" }}
          />
          <Calendar onChange={onChange} value={value} minDate={new Date()} />
        </div>
      </form>
    </div>
  );
}
