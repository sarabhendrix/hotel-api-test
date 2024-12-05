import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/CreateAccount.css';
import travelImage from '../assets/images/travel-background.jpg';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Account Created:", formData);
      navigate('/home');
      //add logic to handle account creation, e.g., send formData to backend
    };
  

    return (
        <div className="create-acct-page">
          <div className="create-acct-container">
            {/* Left Section: Image */}
            <div className="create-acct-image">
              <img src={travelImage} alt="travel" />
            </div>

            {/* Right Section: Form */}
            <div className="create-acct-form">
              <h1>Let's Get Started!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                  <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                </div>
                  <div>
                    <button className="submit-button" type="submit">Create Account</button>  
                  </div>
                  
              </form>
            </div>
          </div>
        </div>
    );
};

export default CreateAccount;