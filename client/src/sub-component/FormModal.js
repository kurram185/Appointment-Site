import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AppointementForm from "../components/AppointementForm";

export default function FormModal({ showModal, closeModal }) {
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [submissionData, setData] = useState({});

  const handleClose = () => {
    setShow(false);
    closeModal(false);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      birthDate,
      birthMonth,
      birthYear,
      gender,
      phone,
      address,
      city,
      state,
      email,
      appliedBefore,
      procedure,
      appointDate,
    } = submissionData;
    const res = await fetch("/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        birthDate,
        birthMonth,
        birthYear,
        gender,
        phone,
        address,
        city,
        state,
        email,
        appliedBefore,
        procedure,
        appointDate,
      }),
    });

    const resData = await res.json();
    console.log(resData);
    setSubmit(true);
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
          {submit ? <h1>Thank You</h1> : <AppointementForm data={setData} />}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={(e) => (submit ? setShow(false) : handleSubmission(e))}
          >
            {submit ? "I Understand" : "Submit"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
