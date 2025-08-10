import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [notification, setNotification] = useState('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const publicKey = "xcK3fWXkxs1qVv2qR";
  const serviceId = "service_d8jth0l";
  const templateToUser ="template_rrp5t7m";
  const templateToMe = "template_rtyyfso";
  const apiKey="";
  const form = useRef();
  const style = {
        "& label.Mui-focused": {
            color: "gray", // Label when focused
        },
        "& .MuiOutlinedInput-root": {
            color: "black", // Input text color
            "&.Mui-focused fieldset": {
                borderColor: "#000", // Border when focused
            },
            "&:hover fieldset": {
                borderColor: "#000", // Border on hover
            },
        },
        "& .MuiInputLabel-root": {
            color: "black", // Label default color
        },
    };
  const inputProps = {
      color: "error",
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* emailJS Enabled */
      emailjs.init(publicKey);

      if (name !== '' && email !== '' && message !== '') {
          const templateParams = {
              name: name,
              email: email,
              message: message
          };


          console.log(templateParams);

          // First: Send auto-reply to the user
          emailjs.send(serviceId, templateToUser, templateParams).then(
              (responseUser) => {
                  // Second: Send notification to yourself
                  emailjs.send(serviceId, templateToMe, templateParams).then(
                      (responseMe) => {
                          console.log('SUCCESS!', responseMe.status, responseMe.text);
                          setNotification('Email sent successfully!');
                          setTimeout(() => setNotification(''), 3000);
                      },
                      (errorMe) => {
                          console.log('FAILED to send to me...', errorMe);
                          setNotification('Failed to send notification email. Please try again.');
                          setTimeout(() => setNotification(''), 3000);
                      }
                  );
              },
              (errorUser) => {
                  console.log('FAILED to send to user...', errorUser);
                  setNotification('Failed to send auto-reply. Please try again.');
                  setTimeout(() => setNotification(''), 3000);
              }
          );
      }

      setName('');
      setEmail('');
      setMessage('');
    
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
                  {notification && (
                      <div
                          style={{
                              backgroundColor: notification.includes('successfully') ? '#d4edda' : '#f8d7da',
                              color: notification.includes('successfully') ? '#155724' : '#721c24',
                              padding: '10px',
                              marginTop: '10px',
                              borderRadius: '5px'
                          }}
                      >
                          {notification}
                      </div>
                  )}


                  <p style={{paddingLeft:"20px"}}>Got a CDI opportunity or a project waiting to be brought to life? Let’s collaborate and make it happen!</p>
                  <form  className="contact-form" noValidate autoComplete="off">
                      <div className="form-flex">
                          <div className="form-group">
                              <label htmlFor="name">Your Name *</label>
                              <input
                                  type="text"
                                  id="name"
                                  placeholder="What's your name?"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className={nameError ? "error" : ""}
                                  required
                              />
                              {nameError && <span className="helper-text">Please enter your name</span>}
                          </div>

                          <div className="form-group">
                              <label htmlFor="email">Email *</label>
                              <input
                                  type="email"
                                  id="email"
                                  placeholder="How can I reach you?"
                                  value={email}
                                  onChange={(e) => {
                                      const value = e.target.value;
                                      setEmail(value);
                                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                      setEmailError(!emailRegex.test(value));
                                  }}
                                  className={emailError ? "error" : ""}
                                  required
                              />
                              {emailError && <span className="helper-text">Please enter a valid email address</span>}
                          </div>

                      </div>

                      <div className="form-group">
                          <label htmlFor="message">Message *</label>
                          <textarea
                              id="message"
                              placeholder="Send me any inquiries or questions"
                              rows={10}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className={`body-form ${messageError ? "error" : ""}`}
                              style={{fontFamily: 'Segoe UI'}}
                              required
                          />
                          {messageError && <span className="helper-text">Please enter the message</span>}
                      </div>

                      <div className="button-container">
                          <button type="button" onClick={sendEmail} className="send-button" >
                              SEND    <SendIcon />

                          </button>
                      </div>
                  </form>


        </div>
      </div>
    </div>
  );
}

export default Contact;