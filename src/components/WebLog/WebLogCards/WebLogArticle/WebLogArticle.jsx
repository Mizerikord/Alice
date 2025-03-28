import React from 'react';
import './weblogarticle.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

function WebLogArticle(props) {
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
        const currentBlock = document.querySelector(".weblog-data-full");
        const currentImgBlock = document.querySelector(".weblog-img-container-full");
        if (e.target.closest(".weblog-data-full") !== null) {
            document.querySelector(".weblog-data-full").classList.remove("weblog-data-full");
            document.querySelector(".weblog-card-text-open").classList.remove("weblog-card-text-open");
            if (currentImgBlock !== null) {
                currentImgBlock.classList.remove("weblog-img-container-full");
            }
            return;
        }
        if (currentBlock == null) {
            e.target.closest(".weblog-img-container").querySelector(".weblog-data-container").classList.add("weblog-data-full");
            e.target.closest(".weblog-img-container").querySelector(".weblog-card-text").classList.add("weblog-card-text-open");
            if (size < 834) {
                e.target.closest(".weblog-img-container").classList.add("weblog-img-container-full");
            }
            return;
        } else {
            document.querySelector(".weblog-data-full").classList.remove("weblog-data-full");
            document.querySelector(".weblog-card-text-open").classList.remove("weblog-card-text-open");
            if (currentImgBlock !== null) {
                currentImgBlock.classList.remove("weblog-img-container-full");
            }
            if (size < 834) {
                e.target.closest(".weblog-img-container").classList.add("weblog-img-container-full");
            }
            e.target.closest(".weblog-img-container").querySelector(".weblog-data-container").classList.add("weblog-data-full");
            e.target.closest(".weblog-img-container").querySelector(".weblog-card-text").classList.add("weblog-card-text-open");
            return;
        }
    }

    return (
        <li className="weblog-article-container">
            <div className="weblog-img-container" onClick={handleCardOpen}>
                <div className="weblog-data-container">
                    <h4 className="weblog-card-title">{card.blogTitle}</h4>
                    <p className="weblog-card-text">{card.blogText[0]}</p>
                </div>
            </div>
            <Link to="/article" className="weblog-card-btn">{currentText}</Link>
        </li>
    );
}

export default WebLogArticle;
