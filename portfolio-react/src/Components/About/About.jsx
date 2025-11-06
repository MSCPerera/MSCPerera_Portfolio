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
                <img src={profile_img1} alt="" className='about-img'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a third-year student pursuing a BSc (Hons) degree in Computing and Information Systems at Sabaragamuwa University in Sri Lanka, seeking a software engineering internship with experience in ReactJS, Node.js, Express.js, MongoDB, MySQL, HTML, CSS, JavaScript, C, and C#.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Top 15 finalists</h1>
                <p>Nexora 1.0 Inter University Datathon<br/>NSBM Green University</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2nd Round Qualify</h1>
                <p>DevThon 2.0<br/>University of Moratuwa</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>Participation</h1>
                <p>IDEALIZE 2025<br/>University of Moratuwa</p>
            </div>
        </div>
    </div>
  )
}

export default About