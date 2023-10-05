import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import RegisterSection from "../sub-component/RegisterSection";
import LoginSection from "../sub-component/LoginSection";

import "../styles/Validation.css";

export default function ValidationPage() {
  const [section, setSection] = useState(true);
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
