import React from 'react'
import './Card.css'
import { FaSquareFacebook, FaSquareEnvelope, FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Card = (props) => {
    return (
        <div className='card'>
            <div className='content mt-4'>
                <div className='image'>
                <img  src={props.img}  />
                </div>
                <h4>{props.name}</h4>
                <p>{props.job}</p>
            </div>
            <div className='social'>
                <span><Link to={props.facebook}><FaSquareFacebook className='icon' /></Link></span>
                <span><Link to={props.email}><FaSquareEnvelope className='icon' /></Link></span>
                <span><Link to={props.github}><FaSquareGithub className='icon' /></Link></span>
            </div>
        </div>
    )
}

export default Card
