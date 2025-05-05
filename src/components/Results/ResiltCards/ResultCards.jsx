import React from 'react';
import './resultcards.css';
import ResultText from './ResultText/ResultText';
import { useState, useEffect } from 'react';

function ResultCards(props) {
    const cards = props.cards;
    const [isImgCount, setImgCount] = useState(0);

    function handleImgCount(e) {
        if (e.target.id === "left") {
            if (isImgCount < 1) {
                return;
            }
            setImgCount(isImgCount - 1);
            return;
        } else if (e.target.id === "right") {
            if (isImgCount >= cards[props.isCount - 1].resultUrl.length - 1) {
                return;
            }
            setImgCount(isImgCount + 1);
            return;
        }
    }

    useEffect(() => {
        if (cards[props.isCount - 1].resultUrl.length === 1) {
            document.querySelector(".result-left").style.setProperty("visibility", "hidden");
            document.querySelector(".result-right").style.setProperty("visibility", "hidden");
        } else  {
            document.querySelector(".result-left").style.setProperty("visibility", "visible");
            document.querySelector(".result-right").style.setProperty("visibility", "visible");
        }
    }, [cards, props.isCount]);

    function handleAddText(){
        props.onAdd();
    }

    return (
        <li className="results-item">
            <div className="result-img-container">
                <input id='left' type='button' className="result-arrow result-left" onClick={handleImgCount} />
                <img className="result-img" src={cards[props.isCount - 1].resultUrl[isImgCount]} alt="Изображение кошки" />
                <input id='right' type='button' className="result-arrow result-right" onClick={handleImgCount} />
            </div>
            <div className="result-paragraph-container">
                <h3 className="result-paragraph-title">{cards[props.isCount - 1].resultTitle}</h3>
                <div className="result-paragraph">
                    {cards[props.isCount - 1].resultText.map((elem, index) => {
                        return <ResultText
                            text={elem}
                            key={index}
                        />
                    })}
                    <div className="result-paragraph-add-contaner" onClick={handleAddText}>
                        <p className="result-add-text">Смотреть {Object.keys(cards[props.isCount - 1].resultText[props.isTextCount])}</p>
                        <svg viewBox="0 0 44 44" fill="none" className="result-add-img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.48391 12.7167C6.30888 12.5513 6.10299 12.422 5.87799 12.3361C5.65299 12.2503 5.41328 12.2096 5.17256 12.2164C4.93184 12.2233 4.69482 12.2774 4.47503 12.3758C4.25524 12.4742 4.05698 12.615 3.89158 12.79C3.72618 12.965 3.59688 13.1709 3.51105 13.3959C3.42522 13.6209 3.38455 13.8606 3.39136 14.1014C3.39817 14.3421 3.45232 14.5791 3.55074 14.7989C3.64915 15.0187 3.78988 15.2169 3.96492 15.3823L20.4649 30.9657C20.8053 31.2875 21.256 31.4668 21.7244 31.4668C22.1929 31.4668 22.6435 31.2875 22.9839 30.9657L39.4857 15.3823C39.6646 15.218 39.809 15.0198 39.9107 14.7992C40.0123 14.5786 40.069 14.34 40.0777 14.0973C40.0863 13.8546 40.0466 13.6126 39.9609 13.3853C39.8752 13.1581 39.7452 12.9501 39.5784 12.7735C39.4117 12.5969 39.2115 12.4552 38.9895 12.3567C38.7676 12.2581 38.5282 12.2046 38.2854 12.1993C38.0426 12.194 37.8011 12.237 37.5751 12.3258C37.349 12.4147 37.1429 12.5475 36.9686 12.7167L21.7244 27.112L6.48391 12.7167Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ResultCards;
