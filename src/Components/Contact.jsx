import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact'  className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern}/>
        </div>
        <div className='contact-sectiion'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currentlsy available to take on new projects, so feel free  to send me a message about anything that you want me to work on. You can contact anytime</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon}/><p>Lamedqudus69@gmail.com.</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon}/><p>Nigeria, Osun state, Osogbo.</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon}/><p>+234 9163182970</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label>Your Email</label>
                <input type='email' placeholder='Enter your email' name='name'/>
                <label>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact