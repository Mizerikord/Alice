import React from 'react';
import './helpyoucards.css';

function HelpYouCards(props) {

    function handleClickCard(e) {
        props.onChange(e.target.closest(".demeanor-item").id)
    }

    return (
        <li className="demeanor-item" id={props.card ? props.card._id : ""} onClick={handleClickCard}>
            <img src={props.card ? props.card.imgUrl : ""} alt="" className="demeanor-img" />
            <h3 className="demeanor-title">{props.card ? props.card.title : ""}</h3>
            <p className="demeanor-text">{props.card ? props.card.text : ""}</p>
        </li>
    )
}

export default HelpYouCards;
