import React, { useState } from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = ({ serviceAmount }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [totalAmount, setTotalAmount] = useState(serviceAmount);

  const handlePaymentChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleReserveNow = () => {
    if (!selectedMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert(`Payment Method: ${selectedMethod}\nTotal Amount: $${totalAmount}`);
  };

  return (
    <>
      <div className="payment">
        <label className="d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="payment-method" 
            value="Direct Bank Transfer"
            onChange={handlePaymentChange}
          /> 
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label className="d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="payment-method" 
            value="Cheque Payment"
            onChange={handlePaymentChange}
          /> 
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="payment-method" 
            value="Master Card"
            onChange={handlePaymentChange}
          /> 
          Master Card
        </label>
        <img src={masterCard} alt="Master Card" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="payment-method" 
            value="Paypal"
            onChange={handlePaymentChange}
          /> 
          Paypal
        </label>
        <img src={paypal} alt="Paypal" />
      </div>

      <div className="payment text-end mt-5">
        <button onClick={handleReserveNow}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
