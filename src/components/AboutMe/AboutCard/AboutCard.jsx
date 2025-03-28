import React from 'react';
import './aboutcard.css';

function AboutCard(props) {
    
    return (
        <li className="advantage-item">
            <img src={props.data.imgUrl} alt="" className="advantage-slider-img" />
            <p className="advantage-slider-text">{props.data.text}</p>
        </li>
    )
}

export default AboutCard;
