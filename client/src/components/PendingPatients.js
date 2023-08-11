import React, { useState } from "react";
import "../styles/Dashboard.css";
import ListGroup from "react-bootstrap/ListGroup";

export default function PendingPatients({ prop }) {
  return (
    <div>
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
