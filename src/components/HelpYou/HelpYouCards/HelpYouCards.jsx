import React from 'react';
import './helpyoucards.css';

function HelpYouCards(props) {

    function handleMoveCard(e) {
        document.querySelector(".demeanor-img").classList.remove('demeanor-img-animate');
        setTimeout(function () {
            document.querySelector(".demeanor-img").classList.add('demeanor-img-animate');
            props.onChange(e.target.closest(".demeanor-item").id);
        }, 10);
    }

    function handleClickCard(e) {
        const currentCards = document.querySelectorAll(".demeanor-item");
        const allCards = Array.from(currentCards);
        allCards.map((elem) => {
            if (elem.classList.contains("demeanor-item-current")) {
                return elem.classList.remove("demeanor-item-current");
            }
        })
        e.target.closest(".demeanor-item").classList.add("demeanor-item-current");
        props.onClick(e.target.closest(".demeanor-item").id)
    }

    function moveOut() {
        props.onMoveOut();
    }

    return (
        <li className={`demeanor-item ${props.card._id === 0 ? "demeanor-item-current" : ""}`} id={props.card ? props.card._id : ""} onMouseOver={handleMoveCard} onClick={handleClickCard} onMouseOut={moveOut}>
            <img src={props.card ? props.card.imgUrl : ""} alt="" className="demeanor-img" />
            <h3 className="demeanor-title">{props.card ? props.card.title : ""}</h3>
            <p className="demeanor-text">{props.card ? props.card.text : ""}</p>
        </li>
    )
}

export default HelpYouCards;
