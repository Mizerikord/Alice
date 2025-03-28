import React from 'react';
import './promo.css';
import MainCat from "../../../media/main-cat.mp4";
import menu from '../../../media/menu.png';
import Header from '../../Header/Header';
import { HashLink as Link } from 'react-router-hash-link';


function Promo(props) {

    function handleClick(e){
        props.onMenu(e.target);
    }

    return (
        <main className='main'>
            <Header onMenu={props.onMenu}/>
            <video className='video-background' autoPlay loop muted>
                <source src={MainCat} type='video/mp4' />
            </video>
            <img src={menu} alt="" className="menu-burger" onClick={handleClick}/>
            <div className="main-container">
                <h1 className="main-title">ШУМАКОВА<br />АЛИСА</h1>
                <p className="main-subtitle">Специалист по коррекции поведения диких и домашних кошек</p>
                <Link to="/#Ready" className="main-subscribe-btn">Записаться на консультацию</Link>
            </div>
        </main>
    );
}

export default Promo;
