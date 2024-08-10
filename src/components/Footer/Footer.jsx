import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "../../styles/footer.css";

const quickLinks = [
  { path: "/about", display: "About" },
  { path: "#", display: "Privacy Policy" },
  { path: "/cars", display: "Service Listing" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link
                  to="/home"
                  className="d-flex align-items-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i className={`ri-car-line ${isHovered ? "animate__car" : ""}`}></i>
                  <span>
                    Wheel
                    <br /> Bro
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Dedicated to delivering exceptional vehicle service with cutting-edge technology, global access, and unparalleled convenience, Wheel Bro ensures your vehicle remains in peak condition wherever your journey takes you.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="p-0 mt-3 quick__link"
                  >
                    <Link
                      to={item.path}
                      className="hover-underline"
                    >
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Racecourse, Coimbatore</p>
              <p className="office__info">Phone: +0995345875365</p>
              <p className="office__info">Email: Wheelbro@gmail.com</p>
              <p className="office__info">Office Time: 10am - 10pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe to our newsletter</p>
              <div className="newsletter">
                <input
                  type="email"
                  placeholder="Email"
                  className="email-input"
                />
                <span>
                  <i className="ri-send-plane-line send-icon"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                Trust the Process!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
