import React from 'react';
import './footer.css';
import { HashLink as Link } from 'react-router-hash-link';
import tlg from '../../media/tlg.svg';
import watsapp from '../../media/watsapp.svg';
import email from '../../media/e-mail.svg';



function Footer() {

    return (
        <footer className="footer" id='Footer'>
            <div className="footer-nav-container">
                <div className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item"><Link to="/#Promo" className="footer-anchor">Главная</Link></li>
                        <li className="footer-nav-item"><Link to="/#AboutMe" className="footer-anchor">Обо мне</Link></li>
                        <li className="footer-nav-item"><Link to="/#HelpYou" className="footer-anchor">Чем я могу помочь</Link></li>
                        <li className="footer-nav-item"><Link to="/#Services" className="footer-anchor">Услуги</Link></li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item"><Link to="/#Stages" className="footer-anchor">Этапы работы</Link></li>
                        <li className="footer-nav-item"><Link to="/#Result" className="footer-anchor">Мои работы</Link></li>
                        <li className="footer-nav-item"><Link to="/blog" className="footer-anchor">Блог</Link></li>
                        <li className="footer-nav-item"><Link to="/#Contacts" className="footer-anchor">Контакты</Link></li>
                    </ul>
                </div>
                <Link to="/#Ready" className="footer-service-btn">Записаться на консультацию</Link>
            </div>
            <h2 className="owner-name-title">ШУМАКОВА АЛИСА</h2>
            <div className="footer-callback-container">
                <ul className="footer-links">
                    <li className="footer-link">
                        <Link to="https://t.me/cosm_alison" target="_blanc" className="footer-contact">
                            <img src={tlg} alt="" className="footer-contact-icon" />
                            <p className="footer-contact-text">@cosm_alison</p>
                        </Link>
                    </li>
                    <li className="footer-link">
                        <Link to="https://wa.me/79776480006" target="_blanc" className="footer-contact">
                            <img src={watsapp} alt="" className="footer-contact-icon" />
                            <p className="footer-contact-text">+79776480006</p>
                        </Link>
                    </li>
                    <li className="footer-link">
                        <Link to="" className="footer-contact">
                            <img src={email} alt="" className="footer-contact-icon" />
                            <p className="footer-contact-text">info@darkfox.ru</p>
                        </Link>
                    </li>
                </ul>
                <div className="copyright-conainer">
                    <p className="copyright copyright-policy">Политика конфиденциальности</p>
                    <p className="copyright">Copyright 2024</p>
                    <p className="copyright">Все права защищены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
