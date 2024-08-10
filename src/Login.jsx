import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState(''); // State to hold message
  const [messageType, setMessageType] = useState(''); // State to hold message type
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control popup visibility
  const [visible, setVisible] = useState(true); // Modal visibility
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", values);
  
      if (response.status === 200) {
        setMessage('Welcome!');
        setMessageType('success');
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate('/home');
        }, 3000); // Hide popup and navigate after 3 seconds
      }
    } catch (error) {
      console.error(error);
      setMessage('Login failed: ' + (error.response?.data?.message || "An error occurred"));
      setMessageType('error');
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000); // Hide error popup after 3 seconds
    }
  };

  return (
    <div>
      <img 
        src="https://i.pinimg.com/originals/73/5c/ea/735cea56968f703df45d4c551ee3b160.gif"
        className='image'
        alt="Service Background"
      />
      

      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Modal 
          className='box' 
          isOpen={visible} 
          onRequestClose={() => setVisible(false)}
          contentLabel="Login Modal"
        >
          <div className='close-btn' onClick={() => setVisible(false)}>&times;</div>
          <h1 className='logintitle'>Login</h1><br />
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label><br />
              <input 
                type="email" 
                placeholder='Enter Email' 
                name='email'
                value={values.email}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label><br />
              <input 
                type="password" 
                placeholder='Enter Password' 
                name='password'
                value={values.password}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>

            <button type='submit' className='btn1'>Login</button><br /><br/>
            <p className='words'>Don't have an account?
              <Link to="/signup" className='btn2'> Create Account</Link>
            </p>
          </form>

          {/* Success/Error Popup */}
          {showSuccessPopup && (
            <div className='success-popup'>
              <div className={`popup ${messageType}`}>
                <span className='message'>{message}</span>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
