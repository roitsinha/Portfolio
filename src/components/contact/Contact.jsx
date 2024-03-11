import React, { useEffect, useState } from "react";
import "./contact.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  useEffect(() => emailjs.init("RKum-TqXGKAhCWRhg"), []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.send("service_f3bj3ql", "template_vtvms2p", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    alert("message send successfully");
    // emailjs.sendForm(formData, "RKum-TqXGKAhCWRhg");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rohitsinha1267@gmail.com</h5>
            <a href="mailto:rohitsinha1267@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaXTwitter className="contact__option-icon" />
            <h4>X</h4>
            <h5>roit_sinha</h5>
            <a href="https://twitter.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <CiInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>roit_sinha</h5>
            <a href="https://instagram.com" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* ----End of Contact Option---- */}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            value={formData.name}
            name="name"
            placeholder="Your Full Name"
            required
            onChange={changeHandler}
          />
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Your Email"
            required
            onChange={changeHandler}
          />
          <textarea
            name="message"
            value={formData.message}
            rows="7"
            placeholder="Your Message"
            required
            onChange={changeHandler}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
