import React from 'react';
import './aboutme.css';
import promo from '../../media/about-promo.png';
import AboutCard from './AboutCard/AboutCard';
import CardData from '../../utils/cards-data';

function AboutMe() {

    const cards = CardData;

    return (
        <section className="about-me" id='AboutMe'>
            <h2 className="section-title">Обо мне</h2>
            <div className="about-description">
                <div className="about-owner-container">
                    <div className="owner-description">
                        <h3 className="owner-title">"Вы любите свою кошку, но не понимаете её поведение?”</h3>
                        <img src={promo} alt="" className="owner-img" />
                        <ul className="owner-info-list">
                            <li className="owner-info-item">
                                <p className="owner-info">Кошки – удивительные создания, но иногда их поступки ставят нас в тупик. Почему она вдруг начала драть диван, игнорировать лоток или кусаться? Причина есть всегда, и моя задача – помочь вам её найти.</p>
                            </li>
                            <li className="owner-info-item">
                                <p className="owner-info">
                                    Я знаю, каково это – сталкиваться с проблемами поведения. Однажды мой кот стал писать на кровать, а советы друзей и знакомых на этот счёт меня неприятно удивили. Они говорили, что нужно натыкать его носом, отругать, запереть в тёмной ванной с лотком. Именно эта ситуация побудила меня профессионально заняться тем, чем я увлекалась всю свою жизнь.
                                </p>
                            </li>
                            <li className="owner-info-item">
                                <p className="owner-info">Дипломированный фелинолог с ветеринарным образованием. Участник различных конференций и лекций ведущих специалистов в области ветеринарной и поведенческой медицины.</p>
                            </li>
                            <li className="owner-info-item">
                                <p className="owner-info">Подхожу к решению проблем комплексно: анализ жизни, здоровья и поведения + тренинг. Опираюсь на научные методы, не использую принуждение и стрессовые техники. Помогаю владельцам наладить гармоничную жизнь с питомцами.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="advantage">
                <h3 className="advantage-title">"Преимущества"</h3>
                <div className="advantage-slider">
                    <ul className="advantage-list" id="element">
                        {cards.map((card) => (<AboutCard data={card}
                            key={card._id} />))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
