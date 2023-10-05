import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AppointementForm({ data }) {
  const currentYear = new Date().getFullYear();
  const [appointData, setAppointData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    phone: Number,
    address: "",
    city: "",
    state: "",
    email: "",
    appliedBefore: "",
    procedure: "",
    appointDate: new Date().toLocaleDateString(),
  });
  const pastYears = 50;
  useEffect(() => {
    data(appointData);
  }, [appointData]);
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
            <input
              type="text"
              className="form-control"
              value={appointData.firstName}
              onChange={(e) =>
                setAppointData({ ...appointData, firstName: e.target.value })
              }
            />
            <label>First Name</label>
          </div>
          <div className="ml-3">
            <input
              type="text"
              className="form-control"
              value={appointData.lastName}
              onChange={(e) =>
                setAppointData({ ...appointData, lastName: e.target.value })
              }
            />
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
                {appointData.birthDate ? appointData.birthDate : "Date"}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ height: "300px", overflowY: "auto" }}>
                {Array.from({ length: 31 }, (_, index) => (
                  <Dropdown.Item
                    key={index + 1}
                    onClick={() => {
                      const selectedDate = index + 1;
                      setAppointData({
                        ...appointData,
                        birthDate: selectedDate.toString(),
                      });
                    }}
                  >
                    {index + 1}
                  </Dropdown.Item>
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
                {appointData.birthMonth ? appointData.birthMonth : "Month"}
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
                  <Dropdown.Item
                    onClick={() => {
                      setAppointData({
                        ...appointData,
                        birthMonth: m.toString(),
                      });
                    }}
                  >
                    {m}
                  </Dropdown.Item>
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
                {appointData.birthYear ? appointData.birthYear : "Year"}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ height: "300px", overflowY: "auto" }}>
                {Array.from({ length: pastYears + 1 }, (_, index) => (
                  <Dropdown.Item
                    onClick={() =>
                      setAppointData({
                        ...appointData,
                        birthYear: (currentYear - index).toString(),
                      })
                    }
                  >
                    {currentYear - index}
                  </Dropdown.Item>
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
                {appointData.gender ? appointData.gender : "Gender"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setAppointData({ ...appointData, gender: "Male" })
                  }
                >
                  Male
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setAppointData({ ...appointData, gender: "Female" })
                  }
                >
                  Female
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setAppointData({ ...appointData, gender: "Prefer Not say" })
                  }
                >
                  Prefer Not say
                </Dropdown.Item>
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
              value={appointData.phone}
              onChange={(e) =>
                setAppointData({ ...appointData, phone: e.target.value })
              }
            />
          </div>
        </div>

        <h5>Address</h5>
        <input
          type="text"
          className="form-control"
          value={appointData.address}
          onChange={(e) =>
            setAppointData({ ...appointData, address: e.target.value })
          }
        />
        <label>Address</label>
        <div className="d-flex justify-content-between">
          <div>
            <input
              type="text"
              className="form-control"
              value={appointData.city}
              onChange={(e) =>
                setAppointData({ ...appointData, city: e.target.value })
              }
            />
            <label>City</label>
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              value={appointData.state}
              onChange={(e) =>
                setAppointData({ ...appointData, state: e.target.value })
              }
            />
            <label>State/Province</label>
          </div>
        </div>
        <div className="my-5">
          <h5>Email</h5>
          <input
            type="email"
            className="form-control w-50"
            placeholder="example@example.com"
            value={appointData.email}
            onChange={(e) =>
              setAppointData({ ...appointData, email: e.target.value })
            }
          />
        </div>
        <div>
          <h5>Have you ever applied to our service before?</h5>
          <div className="d-flex flex-row justify-content-evenly">
            <div className="form-check ">
              <input
                type="radio"
                className="form-check-input"
                onChange={() =>
                  setAppointData({ ...appointData, appliedBefore: "yes" })
                }
                checked={appointData.appliedBefore === "yes"}
              />
              <label className="from-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={() =>
                  setAppointData({ ...appointData, appliedBefore: "no" })
                }
                checked={appointData.appliedBefore === "no"}
              />
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
              {appointData.procedure ? appointData.procedure : "Select"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() =>
                  setAppointData({
                    ...appointData,
                    procedure: "Medical Examination",
                  })
                }
              >
                Medical Examination
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setAppointData({
                    ...appointData,
                    procedure: "Result Analysis",
                  })
                }
              >
                Result Analysis
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setAppointData({
                    ...appointData,
                    procedure: " Doctor Check",
                  })
                }
              >
                Doctor Check
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setAppointData({
                    ...appointData,
                    procedure: "Check-Up",
                  })
                }
              >
                Check-Up
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <h5>Choose the appointment date</h5>
          <input
            type="text"
            disabled
            value={appointData.appointDate}
            className="form-control"
            style={{ background: "white" }}
          />
          <Calendar
            onChange={(e) => {
              setAppointData({
                ...appointData,
                appointDate: e.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
              });
            }}
            value={appointData.appointDate}
            minDate={new Date()}
          />
        </div>
      </form>
    </div>
  );
}
