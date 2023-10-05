import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

export default function RegisterSection() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    user: "",
    name: "",
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  let name;
  let value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const { user, userName, name, email, password, cPassword } = registerData;
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doctor: user === "Doctor" ? true : false,
        userName,
        name,
        email,
        password,
        cPassword,
      }),
    });
    const resData = await res.json();
    console.log(resData);
    if (resData.error === "Please Fill The All Fields") {
      window.alert("Invalid Data");
      console.log("Invalid Data");
    } else if (resData.error === "Email or username already exist") {
      window.alert("email or username already register");
    } else {
      window.alert("Registration successful");
      navigate("/");
    }
  };
  return (
    <div>
      <form>
        <Dropdown className="mb-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {registerData.user
              ? registerData.user
              : "Are You a doctor or patient?"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() =>
                setRegisterData({ ...registerData, user: "Doctor" })
              }
            >
              Doctor
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                setRegisterData({ ...registerData, user: "Patient" })
              }
            >
              Patient
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="form-outline mb-4">
          <input
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
            type="text"
            // id="registerName"
            className="form-control"
            required
            // name="name"
          />
          <label className="form-label" for="registerName">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={registerData.userName}
            onChange={handleInput}
            type="text"
            id="registerUsername"
            className="form-control"
            name="userName"
          />
          <label className="form-label" for="registerUsername">
            Username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={registerData.email}
            onChange={handleInput}
            type="email"
            id="registerEmail"
            className="form-control"
            name="email"
          />
          <label className="form-label" for="registerEmail">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={registerData.password}
            onChange={handleInput}
            type="password"
            id="registerPassword"
            className="form-control"
            name="password"
          />
          <label className="form-label" for="registerPassword">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={registerData.cPassword}
            onChange={handleInput}
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            name="cPassword"
          />
          <label className="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
          onClick={handleSubmission}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
