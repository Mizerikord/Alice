import React from 'react';
import './results.css';
import ResultCards from './ResiltCards/ResultCards';
import resultCards from '../../utils/result-cards';
import { useState, useEffect } from 'react';

function Results(props) {

    const cardsData = resultCards;
    const [isCount, setCount] = useState(1);
    const [isTextCount, setTextCount] = useState(1);
    

    function handleCount(e) {
        handleDropText();
        if (e.target.id === "left") {
            if (isCount < 2) {
                return;
            }
            setCount(isCount - 1);
            return;
        } else if (e.target.id === "right") {
            if (isCount >= cardsData.length) {
                return;
            }
            setCount(isCount + 1);
            return;
        }
    }

    function handleDropText(){
        if (window.innerWidth > 833){
            return
        }
        setTextCount(1);
        const allTextList = document.querySelectorAll(".result-text-list");
        const allTitleList = document.querySelectorAll(".result-paragraph-subtitle");
        const allTextListNew = Array.from(allTextList);
        const allTitleListNew = Array.from(allTitleList);
        allTextListNew.slice(1).map((elem)=>{
            return elem.style.display = "none";
        })
        allTitleListNew.slice(1).map((elem)=>{
            return elem.style.display = "none";
        })
        document.querySelector(".result-paragraph-add-contaner").style.display = "flex";
            return;
    }

    function handleAddText(){
        const allTextList = document.querySelectorAll(".result-text-list");
        const allTitleList = document.querySelectorAll(".result-paragraph-subtitle");
        allTextList[isTextCount].style.display = "block";
        allTitleList[isTextCount].style.display = "block";
        if(isTextCount >= cardsData[isCount - 1].resultText.length-1){
            document.querySelector(".result-paragraph-add-contaner").style.display = "none";
            return;
        }
        setTextCount(isTextCount+1);
    }

    useEffect(() => {
        setTextCount(isTextCount);
    },[isTextCount])

    useEffect(()=>{
        document.querySelector(".result-line-position").style.setProperty('width', `${handleLineLength()}px`);
        function handleLineLength(){
            const fullLine = document.querySelector(".result-line").offsetWidth;
            let linePosition = fullLine / cardsData.length;
            linePosition = linePosition * isCount;
            return linePosition;
        }
    },[cardsData.length, isCount])

    

    return (
        <section className="results" id='Result'>
            <h2 className="section-title results-title">Результаты моей работы</h2>
            <div className="results-slider">
                <ul className="results-list">
                    <ResultCards 
                    isTextCount={isTextCount} 
                    isCount={isCount} 
                    cards={cardsData} 
                    onAdd={handleAddText}
                    />
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
