import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" className='profile-photo' />
        <h1><span>I'm MSC Perera</span> as a Software Engineer based in Sri Lanka</h1>
        <p>I am a third-year student pursuing a BSc (Hons) degree in Computing and Information Systems at Sabaragamuwa University in Sri Lanka.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero