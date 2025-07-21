import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import Profile_img from '../../assets/Profile_img.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern}/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={Profile_img}/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am experianced Frontend Developer with over a decade of professional expertise in the field. Throught my career, I have had the privilege of collaborating with prestigious organization, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also enthusiam and dedication i bring to each projects. </p>
                </div>
                <div className='about-skills'>
             <div className='about-skill'><p>HtML & CSS</p><hr style={{width:'50%'}}/></div>
                    <div className='about-skill'><p>Rect & JS</p><hr style={{width:'70%'}}/></div>
                     <div className='about-skill'><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                     <div className='about-skill'><p>Next JS</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>40+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
    

  )
}

export default About