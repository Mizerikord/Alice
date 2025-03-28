import React from 'react';
import './errorpage.css';
import { HashLink as Link } from 'react-router-hash-link';
import menu from '../../media/menu.png';
import errorImg from '../../media/404.png';
import Header from '../Header/Header';

function ErrorPage(props) {

    function handleClick(e) {
        props.onMenu(e.target);
    }

    return (
        <section className="error-page">
            <Header onMenu={props.onMenu}/>
            <img src={menu} alt="Меню" className="menu-burger" onClick={handleClick} />
            <div className="error-page-container">
                <div className="article-nav-error">
                    <p className="article-nav-sting">
                        <Link to='/' className="article-link">Главная</Link>/
                        <Link to='/error' className="article-link article-link-current">Ошибка</Link>
                    </p>
                </div>
                <div className="error-page-data">
                    <h2 className="error-page-title">Мяу! Кажется, эта страница сбежала</h2>
                    <img src={errorImg} alt="Ошибка" className="error-page-img" />
                    <p className="error-page-text">К сожалению, страница, которую вы ищете, не существует. Может быть, она была перемещена или удалена, или вы ввели неправильный адрес.   </p>
                    <Link to='/' className="error-page-link">Вернуться на главную</Link>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;
