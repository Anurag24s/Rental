import React from "react";
import { RiFacebookBoxLine, RiInstagramLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+00000000000</span>
              </div>
              <div>
                <p>Email</p>
                <span>xyz@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.1 jaipur</span>
              </div>
              <ul>
              <Link to="/facebook" target="_blank">
                <RiFacebookBoxLine />
              </Link>
              <Link to="/instagram" target="_blank">
                <RiInstagramLine />
              </Link>
              <Link to="/linkedin" target="_blank">
                <RiLinkedinBoxLine />
              </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
