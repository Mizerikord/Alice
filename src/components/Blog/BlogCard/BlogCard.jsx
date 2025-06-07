import React from 'react';
import './blogcard.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

function BlogCard(props) {
    const card = props.cards;
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

    function handleToTop() {
        window.scrollTo(0, 0);
    }

    function handleStateCurrentCard() {
        handleToTop();
        props.onCard(card);
    }

    function handleCardOpen(e) {
        const currentBlock = document.querySelector(".blog-data-container-full");
        const currentImgBlock = document.querySelector(".blog-card-full");
        if (e.target.closest(".blog-data-container-full") != null) {
            document.querySelector(".blog-data-container-full").classList.remove("blog-data-container-full");
            if (currentImgBlock !== null) {
                currentImgBlock.classList.remove("blog-card-full");
            }
            return;
        }
        if (currentBlock == null) {
            e.target.closest(".blog-card").querySelector(".blog-data-container").classList.add("blog-data-container-full");
            if (size < 834) {
                e.target.closest(".blog-card").classList.add("blog-card-full");
            }
            return;
        } else {
            document.querySelector(".blog-data-container-full").classList.remove("blog-data-container-full");
            if (currentImgBlock !== null) {
                currentImgBlock.classList.remove("blog-card-full");
            }
            if (size < 834) {
                e.target.closest(".blog-card").classList.add("blog-card-full");
            }
            e.target.closest(".blog-card").querySelector(".blog-data-container").classList.add("blog-data-container-full");
            return;
        }
    }

    return (
        <li className="blog-card-item">
            <div className="blog-card" onMouseEnter={handleCardOpen} onMouseLeave={handleCardOpen}>
                <div className="blog-data-container">
                    <h3 className="blog-card-title">{card.blogTitle}</h3>
                    <p className="blog-card-text">{card.blogText[0]}</p>
                </div>
            </div>
            <Link to="/article" target="_blank" className="blog-card-btn" onClick={handleStateCurrentCard}>{currentText}</Link>
        </li>
    );
}

export default BlogCard;
