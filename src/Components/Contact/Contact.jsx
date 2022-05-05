import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs, { send } from '@emailjs/browser';


const Contact = () => {

  const [done , setDone] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("tıkladım")
    emailjs.sendForm('service_uyxqt3v', 'template_bahdz7h', form.current, 'KdbuvjBH42NEk5FQm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{
              background: "#ABF1FF94",
            }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form  ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <input type='submit' value='Send' className="button"/>
          <span>{done && 'Thanks for contactin me'}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
