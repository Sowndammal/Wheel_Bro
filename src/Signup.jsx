import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

Modal.setAppElement('#root');

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", values);
      console.log(response.data);
      setMessage('Successfully registered!');
      setMessageType('success');
      setShowSuccessPopup(true);
      setTimeout(() => { 
        setShowSuccessPopup(false);
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage('Registration failed. Please try again.');
      setMessageType('error');
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
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
          ariaHideApp={false}
        >
          <div className='close-btn' onClick={() => setVisible(false)}>&times;</div>
          <h1 className='signuptitle'>Sign-Up</h1><br />
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="name"><strong>Name</strong></label>
              <input 
                type="text" 
                placeholder='Enter Name' 
                name='name'
                value={values.name}
                onChange={handleInput} 
                className='iptxt' 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
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
              <label htmlFor="password"><strong>Password</strong></label>
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
            <button type='submit' className='btn1'>Signup</button><br /><br/>
            <p className='words'>
              Already have an account? 
              <Link to="/login" className='btn2'>Login</Link>
            </p>
          </form>

          {/* Success Popup */}
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
