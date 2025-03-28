import { Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';
import tlg from '../../media/tlg.svg';
import watsapp from '../../media/watsapp.svg';
import email from '../../media/e-mail.svg';
import closeImg from "../../media/closeImg.png";

function Header(props) {

    function handleCloseMenu(e) {
        props.onMenu(e.target);
    }

    return (
        <Routes>
            {["/", '/state', '/blog', '/error-404'].map(path =>
                <Route path={path} key={path} element={
                    <header className="header">
                        <img src={closeImg} alt='Закрыть' className="header-close-img" onClick={handleCloseMenu} />
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="/#Promo" className="nav-anchor">Главная</Link></li>
                            <li className="nav-item"><Link to="/#AboutMe" className="nav-anchor">Обо мне</Link></li>
                            <li className="nav-item"><Link to="/#HelpYou" className="nav-anchor">Чем я могу помочь</Link></li>
                            <li className="nav-item"><Link to="/#Services" className="nav-anchor">Услуги</Link></li>
                            <li className="nav-item"><Link to="/#Stages" className="nav-anchor">Этапы работы</Link></li>
                            <li className="nav-item"><Link to="/#Result" className="nav-anchor">Мои работы</Link></li>
                            <li className="nav-item"><Link to="/blog" className="nav-anchor">Блог</Link></li>
                            <li className="nav-item"><Link to="/#Contacts" className="nav-anchor">Контакты</Link></li>
                            <li className="nav-item-footer"><Link to="/#Footer" className="nav-anchor">Политика конфиденциальности</Link></li>
                        </ul>
                        <div className="header-callback-container">
                            <Link to="/#Ready" className="header-callback-btn">Записаться</Link>
                            <div className="header-link-container">
                                <ul className="header-callback-links">
                                    <li className="header-callback-item">
                                        <Link to="https://t.me/cosm_alison" target="_blanc"><img src={tlg} alt="" className="header-callback-img" />
                                        </Link>
                                    </li>
                                    <li className="header-callback-item">
                                        <Link to="https://wa.me/79776480006" target="_blanc"><img src={watsapp} alt="" className="header-callback-img" /></Link></li>
                                    <li className="header-callback-item">
                                        <Link to="" target='_blanc'><img src={email} alt="" className="header-callback-img" /></Link></li>
                                </ul>
                                <p className="header-copyright">Copyright 2024<br />
                                    Все права защищены</p>
                            </div>
                        </div>
                    </header>
                }>
                </Route>)}
        </Routes >

    );
}

export default Header;
