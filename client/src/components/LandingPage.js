import React, { useState } from "react";
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

export default function LandingPage() {
  const [show, setShow] = useState(false);
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
              Login/Signup
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

      <div
        id="carouselMultiItemExample"
        className="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div className="d-flex justify-content-center mb-4">
          <button
            className="carousel-control-prev position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt="avatar"
                    style={{ width: " 150px" }}
                  />
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">John Doe</h5>
                  <p>UX Designer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">Alex Rey</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm"></i>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
