import React from 'react';
import emailjs from 'emailjs-com';
import './email.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'hector_contact',
        e.target,
        'user_xsteLpLrv4q5L2fMGtpSP'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact me</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Please type a subject..."
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Type your name of contact..."
        />
        <label>Email</label>
        <input type="email" name="email" placeholder="Type your email..." />
        <label>Message</label>
        <textarea name="message" rows="6" cols="70" />
        <button type="submit" value="Send" className="send">
          Send <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
}
