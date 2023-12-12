import React from 'react'
import './Home.css'
import mainImage from '../assist/mainImage.PNG'
const Home = () => {
    return (
        <div className='allHome'>
            <div className='row container'>
                <div className='col-md-6'>
                    <div className='part2 partImg image'><div className='image'><img src={mainImage} /></div></div>
                </div>
                <div className='col-md-6'>
                    <div className=' part1 '><h1>
                        <span className='span1'>نصنع</span>
                        <span className='span2'>أجيال</span>
                        <span className='span3'>مبدعة</span>
                    </h1></div>
                </div>
            </div>

        </div>
    )
}

export default Home
