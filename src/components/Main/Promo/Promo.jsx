import React from 'react';
import './promo.css';
import MainCat from "../../../media/main-cat.mp4";
import menu from '../../../media/menu.png';
import Header from '../../Header/Header';
import Paw from "../../../media/paw-gif.gif"
import rock from "../../../media/камень.png";


function Promo(props) {
    function handleClick(e) {
        props.onMenu(e.target);
    }

    function openPopup(){
        props.openPopup();
    }

    return (
        <main className='main'>
            <Header onMenu={props.onMenu} openPopup={props.openPopup} />
            <video className='video-background' autoPlay loop muted>
                <source src={MainCat} type='video/mp4' />
            </video>
            <img src={rock} alt="" className="promo-image" />
            <img src={menu} alt="" className="menu-burger" onClick={handleClick} />
            <div className="paw-container">
                <img src={Paw} alt="" className="paw-img" />
            </div>
            <div className="main-container">
                <h1 className="main-title">ШУМАКОВА<br />АЛИСА</h1>
                <p className="main-subtitle">Специалист по коррекции поведения диких и домашних кошек</p>
                <input className="main-subscribe-btn" type="button" value="Записаться на консультацию" onClick={openPopup}/>
            </div>
        </main>
    );
}

export default Promo;
