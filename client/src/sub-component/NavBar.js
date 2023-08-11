import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <a className="navbar-brand">Appointment</a>
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <form className="d-flex " role="search">
            <input
              className="form-control me-2 self-align-center w-90"
              type="search"
              placeholder="search patient"
              aria-label="Search"
            ></input>
          </form>
        </div>
      </div>
    </nav>
  );
}
