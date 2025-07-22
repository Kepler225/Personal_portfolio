import React from 'react'
import Portfolio_user from '../../assets/Portfolio_user.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div  className='hero'>
        <img src={Portfolio_user}/>
        <h1><span>I' Lameed Qudus, </span>Frontend developer based in Nigeria.</h1>
        <p>i am a frontend developer from Nigeria, Osun State with 3 years of experiance in multiple companies like Microsoft, Data site App and Apple.</p>
<div className="hero-action">
  <div className="hero-connet">
    <a className="anchor-link" href="https://wa.me/2349163182970" target="_blank" rel="noopener noreferrer">let's talk more</a>
  </div>
  <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero