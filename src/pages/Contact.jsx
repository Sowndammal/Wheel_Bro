import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import Swal from 'sweetalert2';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/contact', formData);

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Message sent successfully!',
          footer: `Sender Details: Name: ${formData.name} | Email: ${formData.email}`,
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
          position: 'top',
        });
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send message.',
        footer: `Sender Details: Name: ${formData.name} | Email: ${formData.email}`,
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top',
      });
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <div className="contact-form-container">
                <h6 className="fw-bold mb-4">Get In Touch</h6>

                <Form onSubmit={handleSubmit}>
                  <FormGroup className="contact__form">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                      className="textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </FormGroup>

                  <button className="contact__btn" type="submit">
                    Send Message
                  </button>
                </Form>
              </div>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  123 Racecourse, Coimbatore
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+88683896366</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">WheelBro@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
