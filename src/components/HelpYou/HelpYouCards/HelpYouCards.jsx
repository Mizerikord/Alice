import React from 'react';
import './helpyoucards.css';

function HelpYouCards(props) {
    function handleClickCard(e) {
        document.querySelector(".demeanor-img").classList.remove('demeanor-img-animate');
        setTimeout(function () {
            document.querySelector(".demeanor-img").classList.add('demeanor-img-animate');
        }, 0);
        props.onChange(e.target.closest(".demeanor-item").id);
    }

    return (
        <li className={`demeanor-item ${props.card._id == 0 ? "demeanor-item-current" : ""}`} id={props.card ? props.card._id : ""} onMouseEnter={handleClickCard}>
            <img src={props.card ? props.card.imgUrl : ""} alt="" className="demeanor-img" />
            <h3 className="demeanor-title">{props.card ? props.card.title : ""}</h3>
            <p className="demeanor-text">{props.card ? props.card.text : ""}</p>
        </li>
    )
}

export default HelpYouCards;
