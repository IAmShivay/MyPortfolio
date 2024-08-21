import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../Wapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', userEmail: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, userEmail, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.userEmail,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
     <div className="app__footer">
      <h2 className="head-text">Get in Touch</h2>
      <div className="app__footer-content">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:shivaysharma77893@gmail.com">shivaysharma77893@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+91 8918349445">+91 8918349445</a>
          </div>
        </div>
        
        <div className="app__footer-form">
          {!isFormSubmitted ? (
            <>
              <div className="app__flex">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  name="username" 
                  value={username} 
                  onChange={handleChangeInput} 
                />
              </div>
              <div className="app__flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  name="userEmail" 
                  value={userEmail} 
                  onChange={handleChangeInput} 
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" onClick={handleSubmit}>
                {!loading ? 'Send Message' : 'Sending...'}
              </button>
            </>
          ) : (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
