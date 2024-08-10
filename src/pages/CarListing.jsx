import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import carData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import CommonSection from "../components/UI/CommonSection";

const CarListing = () => {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Function to sort car data based on selected option
  const sortedCarData = [...carData].sort((a, b) => {
    if (sortOption === "low") {
      return a.price - b.price; // Assuming `price` is a property in carData
    } else if (sortOption === "high") {
      return b.price - a.price;
    }
    return 0; // Default case, no sorting
  });

  return (
    <Helmet title="Cars">
      <CommonSection title="Services" />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange} value={sortOption}>
                  <option value="default">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
