import React from 'react'
import kepler_logo from '../assets/kepler_logo.svg'
import user_icon from '../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer'className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                 <img src={kepler_logo}/>
         <p>i am a frontend developer from Nigeria, Osun State with 3 years of experiance in multiple companies like Microsoft, Data site App and Apple.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon}/>
                    <input type='email' placeholder='Enter your email'/> 
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
        <p className='footer-botttom-left'>&copy;2025 Kepler. All rights reserved.</p>
        <div className='footer-bottom-right'>
        <p>Term of Services</p>
         <p>Privacy Policy</p>
        <p>Connect with me</p>
        </div>
        </div>
    </div>
  )
}

export default Footer