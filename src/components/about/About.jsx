import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { BsFolder2 } from "react-icons/bs";

const About = () => {
  return (
   <section id='about'>
    <h5>Want to know?</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='About Image'></img>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about__card">
            <LuUsers className="about__icon"/>
            <h5>CLients</h5>
            <small>Working on it</small>
          </article>

          <article className="about__card">
            <BsFolder2 className="about__icon"/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae minima quae nobis vero accusantium aliquid modi, deserunt placeat expedita. Magni unde sapiente quia corrupti similique ut, vero asperiores repellat!</p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

   </section>
  )
}

export default About