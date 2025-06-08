import React from "react";
import "./popupsubmit.css";
import { HashLink as Link } from "react-router-hash-link";

function PopupSubmit(props) {

function closePopup(){
    props.onClosePopup();
}

    return (
        <div className="popup-submit popup-submit-disable">
            <div className="popup-submit-container">
                <svg className="popup-close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closePopup}>
                    <rect width="27" height="1.00024" transform="matrix(0.710326 0.703873 -0.728678 0.684856 0.820312 0)" fill="#F6F6F6" />
                    <rect width="27" height="1.00024" transform="matrix(-0.710326 0.703873 -0.728678 -0.684856 19.9062 0.995117)" fill="#F6F6F6" />
                </svg>
                <div className="popup-submit-box">
                    <h2 className="popup-submit-title">Спасибо за обращение!</h2>
                    <p className="popup-submit-subtitle">Ваша заявка принята, в скором времени я свяжусь с вами. Пока ждете, можете ознакомиться с полезными статьями в блоге.</p>
                    <Link to={"/blog/*"} className="popup-submit-link" onClick={closePopup} target="_blank" rel="noopener noreferrer">Перейти в блог</Link>
                </div>
            </div>
        </div>
    )
}

export default PopupSubmit;