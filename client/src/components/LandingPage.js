import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import nodeImage from "../node.png";
import bootstrapImage from "../bootstrap.png";
import reactImage from "../react.jpeg";
import { useNavigate } from "react-router-dom";
import FormModal from "../sub-component/FormModal";
import { userContext } from "../App";

export default function LandingPage() {
  const { state, dispatch } = useContext(userContext);
  const [show, setShow] = useState(false);
  console.log(state);
  const navigate = useNavigate();
  return (
    <>
      <FormModal showModal={show} closeModal={(val) => setShow(val)} />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="d-flex justify-content-end align-items-end">
            <Nav.Link href="#home" onClick={() => setShow(true)}>
              Book An Appointment
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link
              href="#validation"
              onClick={() => navigate("/Validation")}
            >
              {state ? "Logout" : "Login/Signup"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={nodeImage}
            alt="First slide"
            style={{ height: "300px" }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bootstrapImage}
            alt="Second slide"
            style={{ height: "300px" }}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={reactImage}
            alt="Third slide"
            style={{ height: "300px" }}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: " #929fba" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white">MDBootstrap</a>
                  </p>
                  <p>
                    <a className="text-white">MDWordPress</a>
                  </p>
                  <p>
                    <a className="text-white">BrandFlow</a>
                  </p>
                  <p>
                    <a className="text-white">Bootstrap Angular</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #3b5998" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #55acee" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #ac2bac" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #0082ca" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright
          </div>
        </footer>
      </div>
    </>
  );
}
