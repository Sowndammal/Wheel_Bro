import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Swal from 'sweetalert2';
import "../../styles/booking-form.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    fromAddress: '',
    vehicleDetails: '',
    serviceType: '',
    journeyDate: '',
    additionalNotes: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your booking has been submitted successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          fromAddress: '',
          vehicleDetails: '',
          serviceType: '',
          journeyDate: '',
          additionalNotes: ''
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: 'Error!',
          text: `Failed to submit booking: ${errorData.message}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: `Failed to submit booking: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="text"
          name="fromAddress"
          value={formData.fromAddress}
          onChange={handleChange}
          placeholder="From Address"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="text"
          name="vehicleDetails"
          value={formData.vehicleDetails}
          onChange={handleChange}
          placeholder="Vehicle Details"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="select"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option value="Water Wash">Water Wash</option>
          <option value="Full Service">Full Service</option>
          <option value="Repair Work">Repair Work</option>
          <option value="Stickerings">Stickerings</option>
        </Input>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="date"
          name="journeyDate"
          value={formData.journeyDate}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          className="textarea"
          placeholder="Additional Notes"
        ></textarea>
      </FormGroup>

      <Button className="booking__btn" type="submit">
        Submit Booking
      </Button>
    </Form>
  );
};

export default BookingForm;
