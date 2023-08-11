import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.css";

export default function PatientsHistory() {
  const [days, setDays] = useState(7);
  return (
    <div>
      <div className="d-flex justify-content-end align-items-end">
        <Dropdown
          className="m-5"
          style={{ background: "#cccccc", borderRadius: "5px", border: "none" }}
        >
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            {`${days} days`}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setDays(7)}>7 Days</Dropdown.Item>
            <Dropdown.Item onClick={() => setDays(15)}>15 Days</Dropdown.Item>
            <Dropdown.Item onClick={() => setDays(30)}>30 Days</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Hassan</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Imran</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Asif</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
