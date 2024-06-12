import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
      <h1>CONTACT ME</h1>
      <div className='contact-icon'
      data-aos="zoom-in-up"
      data-aos-duration="1000">
        <a href='https://www.instagram.com/_sanket_adhav_/' target='_blank' className='items'>
          <FaInstagramSquare className="icons" />
        </a>
        <a href='https://www.facebook.com/sanket.adhav.988?mibextid=ZbWKwL' target='_blank' className='items'>
          <FaFacebook className="icons" />
        </a>
        <a href='https://www.linkedin.com/in/sanket-adhav-826937234/' target='_blank' className='items'>
          <FaLinkedin className="icons" />
        </a>
        <a href='https://twitter.com/Adhav0' target='_blank' className='items'>
          <FaTwitter className="icons" />
        </a>
        <a href='https://github.com/Sanku879' target='_blank' className='items'>
          <FaGithub className="icons" />
        </a>
        <a href='mailto:Sanketadhav1766@gmail.com' target='_blank' className='items'>
          <CgMail className="icons" />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact
