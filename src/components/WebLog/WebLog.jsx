import React from 'react';
import './weblog.css';
import Header from '../Header/Header';
import { HashLink as Link } from 'react-router-hash-link';
import WebLogCards from './WebLogCards/WebLogCards';
import menu from '../../media/menu.png';

function WebLog(props) {

    function handleClick(e) {
        props.onMenu(e.target);
    }

    return (
        <>
            <section className="weblog" id='weblog'>
                <Header onMenu={props.onMenu} openPopup={props.openPopup}/>
                <img src={menu} alt="" className="menu-burger" onClick={handleClick} />
                <div className="weblog-nav">
                    <p className="weblog-nav-sting">
                        <Link to='/' className="weblog-link" target='_blank' rel="noopener noreferrer">Главная</Link>/
                        <Link to='/blog' className="weblog-link weblog-link-current" target='_blank' rel="noopener noreferrer">Блог</Link>
                    </p>
                </div>
                <div className="weblog-info-container">
                    <h2 className="weblog-title">Блог фелинолога</h2>
                    <h3 className="weblog-subtitle">Все, что нужно знать о ваших любимцах</h3>
                    <p className="weblog-text">Добро пожаловать в мой блог, где я делюсь знаниями о кошках, их поведении, здоровье и уходе. Здесь вы найдете полезные советы, интересные факты и ответы на ваши вопросы.</p>
                </div>
            </section>
            <WebLogCards />
        </>
    );
}

export default WebLog;
