import React from 'react';
import "./popup.css";
import { useForm } from "react-hook-form";

function Popup(props) {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({
        mode: "onChange",
        defaultValues: {
            communication: "telefone",
        },
    });

    function handleFormSubmit(data) {
        props.onSend({
            name: data.name,
            phone: data.phone,
            message: data.message,
            communication: data.communication,
        });
    }

    const onSubmit = (data) => {
        return handleFormSubmit(data);
    }

    function closePopup() {
        props.onClosePopup();
    }

    return (
        <div className="popup-cover popup-cover-disable">
            <div className="popup" onSubmit={handleSubmit(onSubmit)}>
                <svg className="popup-close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closePopup}>
                    <rect width="27" height="1.00024" transform="matrix(0.710326 0.703873 -0.728678 0.684856 0.820312 0)" fill="#F6F6F6" />
                    <rect width="27" height="1.00024" transform="matrix(-0.710326 0.703873 -0.728678 -0.684856 19.9062 0.995117)" fill="#F6F6F6" />
                </svg>
                <form className="popup-container">
                    <h2 className="popup-title">Оставьте заявку, и я свяжусь с вами для первого шага!</h2>
                    <div className="popup-data-container">
                        <input type="text" className={`popup-user-data ${errors?.name && "popup-user-data-error"} ${isValid && "popup-user-data-ok"}`} placeholder="Имя"
                            {...register("name", {
                                required: true,
                                pattern: {
                                    value: /^[0-9а-яА-ЯёЁa-zA-Z\- ]+$/,
                                },
                                minLength: {
                                    value: 2,
                                },
                                maxLength: {
                                    value: 30,
                                }
                            })} />
                        <input type="tel" className={`popup-user-data popup-user-data-phone ${errors?.phone && "popup-user-data-error"} ${isValid && "popup-user-data-ok"}`} placeholder="Телефон"
                            {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^\+?[1-9][0-9]{7,14}$/,
                                },
                                minLength: {
                                    value: 11,
                                },
                                maxLength: {
                                    value: 12,
                                }
                            })} />
                    </div>
                    <div className="popup-callback-container">
                        <input type="text" className={`popup-textarea ${errors?.message && "popup-textarea-error"}`} placeholder="Опишите вашу проблему"
                            {...register("message", {
                                required: true,
                                pattern: {
                                    value: /^[0-9а-яА-ЯёЁa-zA-Z\- ]+$/,
                                },
                                minLength: {
                                    value: 2,
                                },
                                maxLength: {
                                    value: 30,
                                }
                            })}
                        />
                        <div className="popup-radio-container">
                            <p className="popup-radio-text">
                                <input type="radio" name="telefone" className="popup-radio" value="telefone"
                                    {...register("communication")} />Связаться по телефону
                            </p>
                            <p className="popup-radio-text">
                                <input type="radio" name="watsapp" className="popup-radio" value="watsapp"
                                    {...register("communication")} />Написать в WhatsApp
                            </p>
                            <p className="popup-radio-text">
                                <input type="radio" name="telegramm" className="popup-radio" value="telegramm"
                                    {...register("communication")} />Написать в Телеграм
                            </p>
                        </div>
                    </div>
                    <input type="submit" className="popup-submit-btn" value="Отправить заявку" />
                    <p className="popup-commit">Нажимая кнопку “отправить заявку”, вы соглашаетесь с политикой конфиденциальности.</p>
                </form>
            </div>
        </div>
    )
}

export default Popup;