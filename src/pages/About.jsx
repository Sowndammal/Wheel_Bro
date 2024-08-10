import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import CommonSection from "../components/UI/CommonSection";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const members = [
  {
    name: "John Doe",
    title: "Expert Mechanic",
    image: "https://example.com/images/john.jpg"
  },
  {
    name: "Jane Smith",
    title: "Service Advisor",
    image: "https://example.com/images/jane.jpg"
  },
  {
    name: "Michael Johnson",
    title: "Technician",
    image: "https://example.com/images/michael.jpg"
  }
];

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img 
                  src="https://media4.giphy.com/media/mKzsc4rdGDA8jWrW9o/200w.gif?cid=6c09b952bgxflnqflo9ds48rj13goh36v29kbu11twhfzgqy&ep=v1_gifs_search&rid=200w.gif&ct=g" 
                  alt="Service" 
                  className="w-100 rounded-3" 
                />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Service Solutions
                </h2>

                <p>
                  Welcome to Wheel Bro, where our mission is to revolutionize vehicle service with a focus on safety, efficiency, and environmental responsibility. At Wheel Bro, we understand that your vehicle is more than just transportation; it's a crucial part of your daily life. That’s why we’re dedicated to providing top-notch service that you can trust.
                </p>

                <p>
                  Our cutting-edge service system combines advanced technology with expert craftsmanship to deliver unparalleled care for your vehicle. We prioritize safety by implementing rigorous protocols and ensuring that every service appointment is conducted in a secure and sanitary environment. Our state-of-the-art diagnostic tools and environmentally friendly practices reflect our commitment to both your vehicle's health and the planet’s well-being.
                </p>

                <p>
                  We believe in transparency and communication, keeping you informed about every step of the service process. Our skilled technicians are not only highly trained but also passionate about delivering exceptional results, ensuring that your vehicle performs at its best and remains safe on the road.
                </p>

                <p>
                  At Wheel Bro, our values drive everything we do. We are committed to creating a service experience that is efficient, clean, and dependable. Join us in our journey towards a safer and greener future, and experience the difference of a service system that truly cares about you and your vehicle.
                </p>

                <h5>
                  Thank you for choosing Wheel Bro. We look forward to serving you and keeping your vehicle in top shape.
                </h5>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91 7904589582</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Partners</h2>
            </Col>
            <OurMembers members={members} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
