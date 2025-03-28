import React from 'react';
import './weblogcards.css';
import WebLogArticle from './WebLogArticle/WebLogArticle';
import blogcards from '../../../utils/blog-cards';
import { useEffect, useState } from 'react';




function WebLogCards() {
    const cards = blogcards;

    const [isCountEl, setIsCountEl] = useState(0);
    const curData = cards.slice(0, isCountEl);

    function handleAddCard() {
        if (window.innerWidth > 1440) {
            setIsCountEl(isCountEl + 4);
        } else if (window.innerWidth >= 834) {
            setIsCountEl(isCountEl + 3);
        } else if (window.innerWidth < 834) {
            setIsCountEl(isCountEl + 2);
        }
    }
    useEffect(() => {
        if (window.innerWidth > 1440) {
            setIsCountEl(8);
        } else if (window.innerWidth >= 834) {
            setIsCountEl(6);
        } else if (window.innerWidth < 834) {
            setIsCountEl(4);
        }
    }, [])


    return (
        <section className="weblog-cards">
            <div className="weblog-cards-filter-container">
                <input type="button" defaultValue="Все" className="weblog-cards-filter-btn" />
                <input type="button" defaultValue="Уход" className="weblog-cards-filter-btn" />
                <input type="button" defaultValue="Уход" className="weblog-cards-filter-btn" />
                <input type="button" defaultValue="Уход" className="weblog-cards-filter-btn" />
                <input type="button" defaultValue="Уход" className="weblog-cards-filter-btn" />
            </div>
            <ul className="weblog-cards-container">
                {curData.map((elem) => {
                    return <WebLogArticle
                        card={elem}
                        key={elem._id}
                    />
                })}
            </ul>
            {cards.length > isCountEl ?
                <input type="button" defaultValue='Больше статей' className="weblog-add-cards-btn" onClick={handleAddCard} />
                : ""
            }
        </section>
    );
}

export default WebLogCards;
