import React from 'react';
import './helpyou.css';
import HelpYouCards from "./HelpYouCards/HelpYouCards";
import HelpCardData from '../../utils/help-you-cards';
import arrow from '../../media/help-slider-arrow.svg';
import paw from "../../media/paw-gif.gif";
import { useState, useEffect } from 'react';

function HelpYou() {
    const cards = HelpCardData;

    const [isCount, setCount] = useState(0);

    function changeCard(id) {
        const monitorCard = document.querySelector(".demeanor-monitor");
        const currentCard = cards[id];
        monitorCard.querySelector(".demeanor-img").src = currentCard.imgUrl;
        monitorCard.querySelector(".demeanor-title").textContent = currentCard.title;
        document.querySelector(".demeanor-item-slider").textContent = currentCard.title;
        monitorCard.querySelector(".demeanor-text").textContent = currentCard.text;
        monitorCard.id = id;
        setCount(id);
        document.querySelector(".demeanor-range-position").textContent = `${id} / ${cards.length - 1}`
    }

    function clickSlider(e) {
        const arrow = e.target.closest(".help-slider-arrow");
        const currentItem = document.querySelector(".demeanor-monitor");
        if (arrow.classList.contains("help-slider-left")) {
            if (Number(currentItem.id) === 0) {
                return;
            }
            changeCard(Number(currentItem.id) - 1)
            return;
        } else if (arrow.classList.contains("help-slider-right")) {
            if (Number(currentItem.id) === cards.length - 1) {
                return;
            }
            changeCard(Number(currentItem.id) + 1)
        }
    }

    useEffect(() => {
        document.querySelector(".demeanor-range-line-position").style.setProperty('width', `${handleLineLength()}px`);
        function handleLineLength() {
            const fullLine = document.querySelector(".demeanor-range-line").offsetWidth;
            let linePosition = fullLine / cards.length;
            linePosition = linePosition * isCount;
            return linePosition;
        }
    }, [cards.length, isCount])

    return (
        <section className="help-you" id='HelpYou'>
            <div className="title-container">
                <h2 className="section-title">Чем я могу помочь?</h2>
                <img src={paw} alt="лапки" className="help-paw" />
            </div>
            <div className="help-container">
                <div className="help-slider">
                    <div className="help-slider-arrow help-slider-left" onClick={clickSlider}><img src={arrow} alt="" className="help-slider-img" /></div>
                    <div className="demeanor-item-slider">{cards[0].title}</div>
                    <div className="help-slider-arrow help-slider-right" onClick={clickSlider}><img src={arrow} alt="" className="help-slider-img" /></div>
                </div>
                <ul className="demeanor-list">
                    <li className="demeanor-monitor" id={cards[0]._id}>
                        <img src={cards[0].imgUrl} alt="" className="demeanor-img demeanor-img-animate" />
                        <h3 className="demeanor-title">{cards[0].title}</h3>
                        <p className="demeanor-text">{cards[0].text}</p>
                    </li>
                    {cards.map((elem) => {
                        return <HelpYouCards
                            card={elem}
                            key={elem._id}
                            onChange={changeCard} />
                    })}
                </ul>
                <div className="demeanor-range">
                    <p className="demeanor-range-position">{`${0} / ${cards.length - 1}`}</p>
                    <div className="demeanor-range-line">
                        <div className="demeanor-range-line-position"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HelpYou;
