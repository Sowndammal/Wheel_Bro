import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/become-driver.css";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img
              src="https://www.competitionclean.com/wp-content/plugins/competiton-clean-auto-detailing-booking/images/car-wash-loading.gif"
              alt="Car wash loading animation"
              className="w-100"
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn ">
              Become Our Partner
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
