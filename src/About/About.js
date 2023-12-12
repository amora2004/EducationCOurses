import React from 'react'
import mainImage from '../assist/mainImage.PNG'
import './About.css'
const About = () => {
    return (
        <div className='container about'>
            <div className='row'>
            <div className='part2 col-lg-6'><div className='image'><img src={mainImage} /></div></div>
            <div className='part3 col-lg-6'>
                <h1>من نحن</h1>
                <p>
                منصة عربية تقدم دورات تدريبية بأفضل جودة في الوطن العربي، بأقل الأسعار مع توفير مسارات متخصصة كل مسار تخصصي يخرج منه المستفيد بإتقان المجال المستهدف منه.  </p>
            </div>
            </div>
        </div>
    )
}

export default About
