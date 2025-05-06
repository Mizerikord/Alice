import React from 'react';
import './results.css';
import ResultText from './ResultText/ResultText';
import resultCards from '../../utils/result-cards';
import { useState, useEffect } from 'react';

function Results(props) {

    const cardsData = resultCards;
    const [isCount, setCount] = useState(1);
    const [isTextCount, setTextCount] = useState(1);
    const [isImgCount, setImgCount] = useState(0);

    function handleCount(e) {
        handleDropText();
        if (e.target.id === "left") {
            if (isCount < 2) {
                return;
            }
            setImgCount(0);
            setCount(isCount - 1);
            return;
        } else if (e.target.id === "right") {
            if (isCount >= cardsData.length) {
                return;
            }
            setImgCount(0);
            setCount(isCount + 1);
            return;
        }
    }

    function handleDropText() {
        if (window.innerWidth > 833) {
            return
        }
        setTextCount(1);
        const allTextList = document.querySelectorAll(".result-text-list");
        const allTitleList = document.querySelectorAll(".result-paragraph-subtitle");
        const allTextListNew = Array.from(allTextList);
        const allTitleListNew = Array.from(allTitleList);
        allTextListNew.slice(1).map((elem) => {
            return elem.style.display = "none";
        })
        allTitleListNew.slice(1).map((elem) => {
            return elem.style.display = "none";
        })
        document.querySelector(".result-paragraph-add-contaner").style.display = "flex";
        return;
    }

    function handleAddText() {
        const allTextList = document.querySelectorAll(".result-text-list");
        const allTitleList = document.querySelectorAll(".result-paragraph-subtitle");
        allTextList[isTextCount].style.display = "block";
        allTitleList[isTextCount].style.display = "block";
        if (isTextCount >= cardsData[isCount - 1].resultText.length - 1) {
            document.querySelector(".result-paragraph-add-contaner").style.display = "none";
            return;
        }
        setTextCount(isTextCount + 1);
    }

    useEffect(() => {
        setTextCount(isTextCount);
    }, [isTextCount])

    useEffect(() => {
        document.querySelector(".result-line-position").style.setProperty('width', `${handleLineLength()}px`);
        function handleLineLength() {
            const fullLine = document.querySelector(".result-line").offsetWidth;
            let linePosition = fullLine / cardsData.length;
            linePosition = linePosition * isCount;
            return linePosition;
        }
    }, [cardsData.length, isCount])

    function handleImgCount(e) {
        if (e.target.id === "left") {
            if (isImgCount < 1) {
                return;
            }
            setImgCount(isImgCount - 1);
            return;
        } else if (e.target.id === "right") {
            if (isImgCount >= cardsData[isCount - 1].resultUrl.length - 1) {
                return;
            }
            setImgCount(isImgCount + 1);
            return;
        }
    }

    useEffect(() => {
        if (cardsData[isCount - 1].resultUrl.length === 1) {
            document.querySelector(".result-left").style.setProperty("visibility", "hidden");
            document.querySelector(".result-right").style.setProperty("visibility", "hidden");
            return
        } else if (cardsData[isCount - 1].resultUrl.length > 1) {
            document.querySelector(".result-left").style.setProperty("visibility", "visible");
            document.querySelector(".result-right").style.setProperty("visibility", "visible");
            if (cardsData[isCount - 1].resultUrl.length === isImgCount) {
                document.querySelector(".result-right").style.setProperty("visibility", "hidden");
            }
            return
        }
    }, [cardsData, isCount, isImgCount]);

    useEffect(() => {
        document.querySelector(".result-img").src = cardsData[isCount - 1].resultUrl[isImgCount]
    }, [cardsData, isImgCount, isCount])

    return (
        <section className="results" id='Result'>
            <h2 className="section-title results-title">Результаты моей работы</h2>
            <div className="results-slider">
                <ul className="results-list">
                    <li className="results-item">
                        <div className="result-img-container">
                            <input id='left' type='button' className="result-arrow result-left" onClick={handleImgCount} />
                            <img className="result-img" src={cardsData[isCount - 1].resultUrl[isImgCount]} alt="Изображение кошки" />
                            <input id='right' type='button' className="result-arrow result-right" onClick={handleImgCount} />
                        </div>
                        <div className="result-paragraph-container">
                            <h3 className="result-paragraph-title">{cardsData[isCount - 1].resultTitle}</h3>
                            <div className="result-paragraph">
                                {cardsData[isCount - 1].resultText.map((elem, index) => {
                                    return <ResultText
                                        text={elem}
                                        key={index}
                                    />
                                })}
                                <div className="result-paragraph-add-contaner" onClick={handleAddText}>
                                    <p className="result-add-text">Смотреть {Object.keys(cardsData[isCount - 1].resultText[isTextCount])}</p>
                                    <svg viewBox="0 0 44 44" fill="none" className="result-add-img" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.48391 12.7167C6.30888 12.5513 6.10299 12.422 5.87799 12.3361C5.65299 12.2503 5.41328 12.2096 5.17256 12.2164C4.93184 12.2233 4.69482 12.2774 4.47503 12.3758C4.25524 12.4742 4.05698 12.615 3.89158 12.79C3.72618 12.965 3.59688 13.1709 3.51105 13.3959C3.42522 13.6209 3.38455 13.8606 3.39136 14.1014C3.39817 14.3421 3.45232 14.5791 3.55074 14.7989C3.64915 15.0187 3.78988 15.2169 3.96492 15.3823L20.4649 30.9657C20.8053 31.2875 21.256 31.4668 21.7244 31.4668C22.1929 31.4668 22.6435 31.2875 22.9839 30.9657L39.4857 15.3823C39.6646 15.218 39.809 15.0198 39.9107 14.7992C40.0123 14.5786 40.069 14.34 40.0777 14.0973C40.0863 13.8546 40.0466 13.6126 39.9609 13.3853C39.8752 13.1581 39.7452 12.9501 39.5784 12.7735C39.4117 12.5969 39.2115 12.4552 38.9895 12.3567C38.7676 12.2581 38.5282 12.2046 38.2854 12.1993C38.0426 12.194 37.8011 12.237 37.5751 12.3258C37.349 12.4147 37.1429 12.5475 36.9686 12.7167L21.7244 27.112L6.48391 12.7167Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="results-position-container">
                    <p className="result-position">{isCount}/{cardsData.length}</p>
                    <div className="result-line">
                        <div className="result-line-position"></div>
                    </div>
                    <div className="position-arrows">
                        <input type="button" id="left" className="position-arrow position-left" onClick={handleCount} />
                        <input type="button" id="right" className="position-arrow position-right" onClick={handleCount} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Results;
