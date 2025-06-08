import React from 'react';
import './articlecards.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

function ArticleCards(props) {
    const card = props.card;

    let currentText = "";

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const debouncedResizeHandler = debounce(() => {
            setSize(window.innerWidth);
        }, 100);

        window.addEventListener('resize', debouncedResizeHandler);
        return () => {
            debouncedResizeHandler.cancel();
            window.removeEventListener('resize', debouncedResizeHandler);
        }

    }, [size]);

    if (size > 834) {
        currentText = "Читать полностью";
    } else {
        currentText = "Читать";
    }


    function handleCardOpen(e) {
        const currentBlock = document.querySelector(".article-data-text-container-full");
        const currentImgBlock = document.querySelector(".article-data-img-container-full");
        if (e.target.closest(".article-data-text-container-full") != null) {
            props.onOpen(false);
            document.querySelector(".article-data-text-container-full").classList.remove("article-data-text-container-full");
            document.querySelector(".article-data-card-text-open").classList.remove("article-data-card-text-open");
            if (size < 834) {
                if (currentImgBlock !== null) {
                    currentImgBlock.classList.remove("article-data-img-container-full");
                    return;
                }
                e.target.closest(".article-data-img-container").classList.add("article-data-img-container-full");
            }
            if(currentImgBlock != null){
                currentImgBlock.classList.remove("article-data-img-container-full");
            }
            return;
        }

        if (currentBlock == null) {
            props.onOpen(true);
            e.target.closest(".article-data-img-container").querySelector(".article-data-text-container").classList.add("article-data-text-container-full");
            e.target.closest(".article-data-img-container").querySelector(".article-data-card-text").classList.add("article-data-card-text-open");
            if (size < 834) {
                e.target.closest(".article-data-img-container").classList.add("article-data-img-container-full");
            }
            return;
        } else {
            props.onOpen(false);
            document.querySelector(".article-data-text-container-full").classList.remove("article-data-text-container-full");
            document.querySelector(".article-data-card-text-open").classList.remove("article-data-card-text-open");
            if (size < 834) {
                if (document.querySelector(".article-data-img-container-full") !== null) {
                    document.querySelector(".article-data-img-container-full").classList.remove("article-data-img-container-full");
                }
                e.target.closest(".article-data-img-container").classList.add("article-data-img-container-full");
            }
            props.onOpen(true);
            e.target.closest(".article-data-img-container").querySelector(".article-data-text-container").classList.add("article-data-text-container-full");
            e.target.closest(".article-data-img-container").querySelector(".article-data-card-text").classList.add("article-data-card-text-open");
            if(currentImgBlock != null){
                currentImgBlock.classList.remove("article-data-img-container-full");
            }
            return;
        }
    }


    return (
        <li className="article-cards-data-container">
            <div className="article-data-img-container" onMouseEnter={handleCardOpen} onMouseLeave={handleCardOpen}>
                <div className="article-data-text-container">
                    <h4 className="article-data-card-title">{card.blogTitle}</h4>
                    <p className="article-data-card-text">{card.blogText[0]}</p>
                </div>
            </div>
            <Link to="/article" className="article-data-card-btn" target="_blank" rel="noopener noreferrer">{currentText}</Link>
        </li>
    );
}

export default ArticleCards;
