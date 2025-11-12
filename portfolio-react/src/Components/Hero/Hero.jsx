import React from 'react'
import './Hero.css'
import profile_img3 from '../../assets/profile_img3.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume_pdf from '../../assets/MSCPerera_CV.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img3} alt="" className='profile-photo' />
        <h1><span>I'm MSC Perera</span> as a Software Engineer based in Sri Lanka</h1>
        <p>I am a third-year student pursuing a BSc (Hons) degree in Computing and Information Systems at Sabaragamuwa University in Sri Lanka.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a href={resume_pdf} download="MSC_Perera_Resume.pdf" className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero