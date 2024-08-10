import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const [formData, setFormData] = useState({
    fromAddress: "",
    service: "",
    journeyDate: "",
    availTime: "",
    serviceType: "ac"
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form processing
    setTimeout(() => {
      setLoading(false);
      navigate("/cars");
    }, 1000);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <label htmlFor="fromAddress">From address</label>
          <Input
            id="fromAddress"
            type="text"
            placeholder="From address"
            value={formData.fromAddress}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="service">Service</label>
          <Input
            id="service"
            type="text"
            placeholder="Service"
            value={formData.service}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="journeyDate">Journey date</label>
          <Input
            id="journeyDate"
            type="date"
            value={formData.journeyDate}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <label htmlFor="availTime">Avail time</label>
          <Input
            id="availTime"
            className="avail-time"
            type="time"
            value={formData.availTime}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <label htmlFor="serviceType">Service Type</label>
          <Input
            id="serviceType"
            type="select"
            value={formData.serviceType}
            onChange={handleInputChange}
          >
            <option value="ac">Water Service</option>
            <option value="non-ac">Full Service</option>
            <option value="ac">Color Replacement</option>
            <option value="non-ac">Monthly Service</option>
          </Input>
        </FormGroup>

        <FormGroup className="form__group">
          <Button
            type="submit"
            className="btn find__car-btn mt-4"
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Find Service"}
          </Button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
