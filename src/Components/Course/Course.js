import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom'
const Course = (props) => {
    return (
        <div className='course mt-5'>
            <img className='courseImg' src={props.image} />
            <div className='p-4'>
                <h2 className='p-2'>مسار : <span>{props.name}</span></h2>
                <p className='p-4'>{props.parg}</p>
            </div>
            <Link to={`/MoreInfo?id=${props.name}`}><button className="more btn">المزيد</button></Link>
        </div>
    )
}

export default Course
