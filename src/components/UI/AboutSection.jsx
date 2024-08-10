import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h5 className="section__subtitle">About Us</h5>
              <h2 className="section__title">Welcome to Wheel Bro</h2>
              <p className="section__description">
              Wheel BRO is an innovative platform designed for both car and two-wheeler owners. Users can schedule maintenance and repair appointments with nearby service centers. A service professional will pick up the vehicle from the user's location and deliver it back safely after the service is completed. The app offers real-time updates, secure payment options, and access to service history, ensuring a hassle-free and reliable experience for all vehicle owners. 
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Transparency in Pricing .
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 	Mechanic Ratings .
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Scheduling and Booking .
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Geographic Coverage .
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://static.wixstatic.com/media/7198b8_da4520a8f09540b7941bd0fd5208e354~mv2.gif" alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
