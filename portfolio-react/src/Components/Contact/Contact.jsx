import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am writing to express my interest in an internship position and and I am eager to gain practical experience and enhance my skills. I believe my academic background and enthusiasm to learn would make me a valuable addition to your team.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>sandunpepera200127@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+94 701721603</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>34/2, Mahawaththa, Weliveriya</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' />
                <label htmlFor=''>Your Email</label>
            </form>
        </div>
    </div>
  )
}

export default Contact