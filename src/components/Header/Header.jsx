import { Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';
import tlg from '../../media/tlg.svg';
import watsapp from '../../media/watsapp.svg';
import email from '../../media/e-mail.svg';
import closeImg from "../../media/closeImg.png";
import { useLocation } from 'react-router-dom';

function Header(props) {

    let location = useLocation();

    function handleCloseMenu(e) {
        if(window.innerWidth > 1440){
            return;
        }
        props.onMenu(e.target);
    }

    function handlePopupOpen() {
        props.openPopup();
    }

    return (
        <Routes>
            {["/", '/state', '/blog', '/error-404'].map(path =>
                <Route path={path} key={path} element={
                    <header className="header">
                        <img src={closeImg} alt='Закрыть' className="header-close-img" onClick={handleCloseMenu} />
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="/#Promo" className={`nav-anchor ${location.pathname === "/" ? "nav-anchor-current" : ""}`} onClick={handleCloseMenu}>Главная</Link></li>
                            <li className="nav-item"><Link to="/#AboutMe" className="nav-anchor" onClick={handleCloseMenu}>Обо мне</Link></li>
                            <li className="nav-item"><Link to="/#HelpYou" className="nav-anchor" onClick={handleCloseMenu}>Чем я могу помочь</Link></li>
                            <li className="nav-item"><Link to="/#Services" className="nav-anchor" onClick={handleCloseMenu}>Услуги</Link></li>
                            <li className="nav-item"><Link to="/#Stages" className="nav-anchor" onClick={handleCloseMenu}>Этапы работы</Link></li>
                            <li className="nav-item"><Link to="/#Result" className="nav-anchor" onClick={handleCloseMenu}>Мои работы</Link></li>
                            <li className="nav-item">
                                <Link to="/blog" className={`nav-anchor ${location.pathname === "/blog" ? "nav-anchor-current" : ""}`} onClick={handleCloseMenu}>Блог</Link></li>
                            <li className="nav-item"><Link to="/#Contacts" className="nav-anchor" onClick={handleCloseMenu}>Контакты</Link></li>
                            <li className="nav-item-footer"><Link to="/#Footer" className="nav-anchor" onClick={handleCloseMenu}>Политика конфиденциальности</Link></li>
                        </ul>
                        <div className="header-callback-container">
                            <input type='button' className="header-callback-btn" value="Записаться" onClick={handlePopupOpen} />
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
                                <p className="header-copyright">Copyright 2025<br />
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
