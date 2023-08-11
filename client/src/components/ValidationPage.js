import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Validation.css";

export default function ValidationPage() {
  const [section, setSection] = useState(true);
  const navigate = useNavigate();
  const RegisterSection = () => {
    return (
      <form>
        <Dropdown className="mb-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Are You a doctor or patient?
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Doctor</Dropdown.Item>
            <Dropdown.Item>Patient</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="form-outline mb-4">
          <input type="text" id="registerName" className="form-control" />
          <label className="form-label" for="registerName">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="registerUsername" className="form-control" />
          <label className="form-label" for="registerUsername">
            Username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="registerEmail" className="form-control" />
          <label className="form-label" for="registerEmail">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
          />
          <label className="form-label" for="registerPassword">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
          />
          <label className="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            checked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
          onClick={() => navigate("/Dashboard")}
        >
          Sign in
        </button>
      </form>
    );
  };
  const LoginSection = () => {
    return (
      <form>
        <div className="form-outline mb-4">
          <input type="email" id="loginName" className="form-control" />
          <label className="form-label" for="loginName">
            Email or username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="loginPassword" className="form-control" />
          <label className="form-label" for="loginPassword">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                checked
              />
              <label className="form-check-label" for="loginCheck">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!" style={{ textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={() => navigate("/Dashboard")}
        >
          Sign in
        </button>
      </form>
    );
  };
  return (
    <div>
      <ul className="nav nav-pills container d-flex flex-row justify-content-center pt-5">
        <li className="nav-item pillsButton col-sm-6 mx-4">
          <a
            className="nav-link"
            href="#pills-login"
            data-bs-toggle="pill"
            onClick={() => setSection(true)}
          >
            Login
          </a>
        </li>
        <li className="nav-item pillsButton col-sm-6 mx-4 ">
          <a
            className="nav-link "
            href="#pills-register"
            data-bs-toggle="pill"
            onClick={() => setSection(false)}
          >
            Register
          </a>
        </li>
      </ul>

      <div className="formStyle pt-5 container justify-content-center ">
        {section ? <LoginSection /> : <RegisterSection />}
      </div>
    </div>
  );
}
