import React from 'react'
import Portfolio_user from '../../assets/Portfolio_user.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={Portfolio_user}/>
        <h1><span>I' Lameed Qudus, </span>Frontend developer based in Nigeria.</h1>
        <p>i am a frontend developer from Nigeria, Osun State with 3 years of experiance in multiple companies like Microsoft, Data site App and Apple.</p>
        <div className='hero-action'>
            <div className='hero-connet'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero