import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
export default function LoginSection() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleSubmission = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resData = await res.json();
    if (
      resData.error === "Please Fill the Fields" ||
      resData.error === "Incorrect Detail"
    ) {
      window.alert("Incorrect Details");
    } else {
      dispatch({ type: "USER", payload: true });
      resData.message === "patient" ? navigate("/") : navigate("/Dashboard");
    }
  };
  return (
    <div>
      <form>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <label className="form-label" for="loginName">
            Email or username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
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
          onClick={handleSubmission}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
