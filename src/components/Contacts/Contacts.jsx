import React from 'react';
import './contacts.css';
import { Link } from 'react-router-dom';
import tlg from '../../media/tlg.svg';
import watsapp from '../../media/watsapp.svg';
import email from '../../media/e-mail.svg';



function Contacts() {

    return (
        <section className="contacts" id='Contacts'>
            <h2 className="section-title contacts-title">Контакты</h2>
            <div className="contacts-data-container">
                <ul className="contact-links-list">
                    <li className="contact-links-item">
                        <Link to="https://t.me/cosm_alison" target="_blanc" className="contact-link">
                            <p className="contact-text">@cosm_alison</p>
                            <img src={tlg} alt="Телеграм" className="contact-icon" />
                        </Link>
                    </li>
                    <li className="contact-links-item">
                        <Link to="https://wa.me/79776480006" target="_blanc" className="contact-link">
                            <p className="contact-text">+79776480006</p>
                            <img src={watsapp} alt="WatsApp" className="contact-icon" />
                        </Link>
                    </li>
                    <li className="contact-links-item">
                        <Link to="mailto:info@darkfox.ru" target='_blanc' className="contact-link" onClick={(e) => {
                            window.location = "mailto:info@darkfox.ru";
                        }}>
                            <p className="contact-text">info@darkfox.ru</p>
                            <img src={email} alt="Почта" className="contact-icon" />
                        </Link>
                    </li>
                </ul>
                <p className="contact-tlg-msg">Подпишись на мой <Link href="" className="telegramm-link">Telegram-канал</Link> напиши мне в личные сообщения слово <span className="contact-tlg-keyword">"КОШКА"</span>, и я подарю тебе методичку: <span className="contact-tlg-keyword">“Лёгкие решения туалетных проблем”</span></p>
                <p className="contact-tlg-msg-description">Это практическое руководство поможет справиться с большинством распространённых проблем, связанных с обустройством туалета для кошек. Сэкономить время и деньги на выборе лотков и наполнителя, а также найти необычные решения обустройства и полезные лайфаки, которые упростят жизнь вам и вашему питомцу.</p>
                <Link to="https://t.me/cosm_alison" target="_blanc" className="telegramm-subscribe">Подписаться</Link>
            </div>
        </section>
    );
};

export default Contacts;
