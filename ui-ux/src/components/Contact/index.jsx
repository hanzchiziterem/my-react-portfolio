import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'gmail',
        'template_ekrxb6t',
        refForm.current,
        'xWTyGeGiYsiEdBP8MCbtv'
    ).then(() => {
        alert('Message successfully sent!')
        window.location.reload(false)
    }, ()=> {
        alert('Failed to send the message, please try again')
    })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am intrested in freelance oppurtunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using the form below from either.
          </p>
          <div className="contact-form" onSubmit={sendEmail}>
            <form action="">
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input name="subject" type="text" placeholder="Subject" required/>
                </li>
                <li>
                    <textarea name="message" id="" placeholder="Message" required></textarea>
                </li>
                <li>
                    <input type="button" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
