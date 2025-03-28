import React from 'react';
import './article.css';
import { HashLink as Link } from 'react-router-hash-link';
import ArticleCards from './ArticleCards/ArticleCards';
import menu from '../../media/menu.png';
import arrow from "../../media/help-slider-arrow.svg";
import { useRef, useEffect, useState } from "react";
import Header from '../Header/Header';


function Article(props) {

    const cards = props.cards;
    function handleClick(e) {
        props.onMenu(e.target);
    }
    // const [size, setSize] = useState("");
    const [position, setPosition] = useState("");
    const [onCardOpen, setCardOpen] = useState(false);
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                let cur = position + e.offsetX;
                setPosition(cur)
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            if (document.querySelector(".article-data-text-container-full") == null) {
                el.addEventListener("wheel", onWheel);
                return () => el.removeEventListener("wheel", onWheel);
            } else {
                return () => el.removeEventListener("wheel", onWheel);
            }
        }
    }, [onCardOpen, position]);

    function handleCardOpen(cardOpen) {
        setCardOpen(cardOpen);
    }

    // useEffect(() => {
    //     const onPageLoad = () => {
    //         setSize(document.querySelector(".article-data-list").scrollWidth);
    //     };
    //     if (document.readyState === 'complete') {
    //         onPageLoad();
    //     } else {
    //         window.addEventListener('load', onPageLoad, false);
    //         return () => window.removeEventListener('load', onPageLoad);
    //     }
    // }, []);

    const currentData = {
        blogUrl: "",
        blogTitle: "",
        blogText: "",
        dataDay: "",
        _id: "",
    };

    function handleWidthLeft() {
        document.querySelector(".article-data-list").scrollLeft += 300;
    }

    function handleWidthRight() {
        document.querySelector(".article-data-list").scrollLeft -= 300;
    }


    if (props.isCard.blogUrl === "") {
        currentData.blogUrl = props.cards[0].blogUrl
        currentData.blogTitle = props.cards[0].blogTitle
        currentData.blogText = props.cards[0].blogText
        currentData._id = props.cards[0]._id
        currentData.dataDay = props.cards[0].dataDay
    } else {
        currentData.blogUrl = props.isCard.blogUrl
        currentData.blogTitle = props.isCard.blogTitle
        currentData.blogText = props.isCard.blogText
        currentData._id = props.isCard._id
        currentData.dataDay = props.isCard.dataDay
    }

    return (
        <>
            <section className="article">
                <Header onMenu={props.onMenu} />
                <img src={menu} alt="Меню" className="menu-burger" onClick={handleClick} />
                <div className="article-main-container">
                    <div className="article-nav">
                        <p className="article-nav-sting">
                            <Link to='/' className="article-link">Главная</Link>/
                            <Link to='/blog' className="article-link">Блог</Link>/
                            <Link to='/article' className="article-link article-link-current">Название статьи</Link>
                        </p>
                    </div>
                    <img src={currentData.blogUrl} alt="" className="article-img-container" />
                    <h2 className="article-title">{currentData.blogTitle}</h2>
                    <div className="article-data-container">
                        <p className="article-data-day">{currentData.dataDay}</p>
                        {currentData.blogText.map((text, index) => {
                            return <p className="article-data" key={index}>{text}</p>
                        })}
                        <p className="article-consult-text">Обнаружили что-то подобное у своего питомца? Не ждите — запишитесь на консультацию и получите помощь от специалиста</p>
                        <Link to="/#Ready" className="article-consult-btn">Записаться на консультацию</Link>
                        <h3 className="article-cards-subtitle">Читайте также</h3>
                        <ul className="article-data-list" ref={elRef} >
                            {cards.map((elem) => {
                                return <ArticleCards
                                    card={elem}
                                    key={elem._id}
                                    onOpen={handleCardOpen} />
                            })}

                        </ul>
                        <div className="article-cards-slider-position">
                            <div className="article-cards-slider-arrows-container">
                                <div className="article-slider-arrow-container" onClick={handleWidthRight}>
                                    <img src={arrow} alt="left" className="article-cards-slider-arrow article-arrow-left" />
                                </div>
                                <div className="article-slider-arrow-container" onClick={handleWidthLeft}>
                                    <img src={arrow} alt="right" className="article-cards-slider-arrow article-arrow-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Article;
