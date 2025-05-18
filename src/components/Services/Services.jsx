import React from 'react';
import './services.css';

function Services(props) {

    function openPopup(){
        props.openPopup();
    }

    return (
        <section className="services" id='Services'>
            <h2 className="section-title services-title">Мои услуги</h2>
            <div className="services-container">
                <ul className="services-list">
                    <li className="services-item">
                        <div className="offers">
                            <div className="offers-text-container">
                                <h3 className="offer-title">ОНЛАЙН КОНСУЛЬТАЦИЯ ПО ДОМАШНИМ КОШАМ</h3>
                                <p className="offer-text">Проходит в формате звонка, на любой удобной платформе. Проводится по предварительной записи и 100% предоплате.</p>
                            </div>
                            <div className="offers-pay-container">
                                <div className="offer-pay">
                                    <p className="offer-duration offer-duration-text">Длительность:</p>
                                    <p className="offer-duration">60мин</p>
                                </div>
                                <p className="offer-cost">3000  ₽  </p>
                            </div>
                        </div>
                        <input type='button' className="sign-btn" defaultValue="Записаться" onClick={openPopup}/>
                    </li>
                    <li className="services-item">
                        <div className="offers">
                            <div className="offers-text-container">
                                <h3 className="offer-title">ОНЛАЙН КОНСУЛЬТАЦИЯ ПО ЭКЗОТИЧЕСКИМ КОШАМ</h3>
                                <p className="offer-text">Проходит в формате звонка, на любой удобной платформе. Проводится по предварительной записи и 100% предоплате.</p>
                            </div>
                            <div className="offers-pay-container">
                                <div className="offer-pay">
                                    <p className="offer-duration offer-duration-text">Длительность:</p>
                                    <p className="offer-duration">60мин</p>
                                </div>
                                <p className="offer-cost">5000  ₽  </p>
                            </div>
                        </div>
                        <input type='button' className="sign-btn" defaultValue="Записаться" onClick={openPopup}/>
                    </li>
                    <li className="services-item">
                        <div className="offers">
                            <div className="offers-text-container">
                                <h3 className="offer-title">ОЧНАЯ КОНСУЛЬТАЦИЯ С ВЫЕЗДОМ Г.МОСКВА*</h3>
                                <p className="offer-text">Входит обратная связь по результатам через 14 дней, в формате созвона или чата не более 20 минут.</p>
                            </div>
                            <div className="offers-pay-container">
                                <div className="offer-pay">
                                    <p className="offer-duration offer-duration-text">Длительность:</p>
                                    <p className="offer-duration">90мин</p>
                                </div>
                                <p className="offer-cost">8000  ₽  </p>
                                <p className="offer-location">*Московская область обсуждается отдельно</p>
                            </div>

                        </div>
                        <input type='button' className="sign-btn" defaultValue="Записаться" onClick={openPopup}/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services;
