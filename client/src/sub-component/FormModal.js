import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AppointementForm from "../components/AppointementForm";

export default function FormModal({ showModal, closeModal }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    closeModal(false);
  };

  useEffect(() => setShow(showModal), [showModal]);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Doctor Appointment Request Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointementForm />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary">Understood</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}