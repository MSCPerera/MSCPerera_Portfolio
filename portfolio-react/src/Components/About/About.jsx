import React from 'react'
import './About.css'
import profile_img1 from '../../assets/profile_img1.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img1} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a third-year student pursuing a BSc (Hons) degree in Computing and Information Systems at Sabaragamuwa University in Sri Lanka, seeking a software engineering internship with experience in ReactJS, Node.js, Express.js, MongoDB, MySQL, HTML, CSS, JavaScript, C, and C#.</p>
                    <p>I am passionate about creating dynamic, responsive user interfaces. I am eager to contribute my skills and dedication to the workplace.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About