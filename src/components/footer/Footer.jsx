import React from 'react'
import './footer.css'
import { IoLogoFacebook } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ROHIT</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><IoLogoFacebook/></a>
        <a href='https://twitter.com'><FaXTwitter/></a>
        <a href='https://instagram.com'><CiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>ROHIT<FaRegCopyright/></small>
        <br></br>
        <small>All right reserved. </small>
      </div>
    </footer>
  )
}

export default Footer