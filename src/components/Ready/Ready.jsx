import React from 'react';
import './ready.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Ready(props) {

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

    const onSubmit = (data, e) => {
        e.preventDefault();
        handleFormSubmit(data);
    }

    return (
        <section className="ready" id='Ready'>
            <h2 className="section-title ready-title">Готовы начать?<br />Первый шаг за вами!</h2>
            <form action="" className="ready-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-user-data-container">
                    <input type="text" className={`form-user-data ${errors?.name && "form-user-data-error"} ${isValid && "form-user-data-ok"}`} placeholder='Введите имя (2-30 символов)'
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
                        })}
                    />
                    <input type="tel" className={`form-user-data form-user-data-tel ${errors?.phone && "form-user-data-error"} ${isValid && "form-user-data-ok"}`} placeholder='Введите номер телефона'
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
                        })}
                    />
                </div>
                <textarea className={`form-message ${errors?.message && "form-user-data-error"}`} placeholder='Опишите вашу проблему (до 1000 символов)'
                    {...register("message", {
                        required: true,
                        minLength: {
                            value: 2,
                        },
                        maxLength: {
                            value: 1000,
                        }
                    })}
                />
                <div className="form-callback-types-container">
                    <label className="form-radio-text">
                        <input type="radio" name="telefone" value="telefone" className="form-callback-type" {...register("communication")}/>Связаться по телефону
                    </label>
                    <label className="form-radio-text">
                        <input type="radio" name="watsapp" value="watsapp" className="form-callback-type" {...register("communication")}/>Написать в WhatsApp
                    </label>
                    <label className="form-radio-text">
                        <input type="radio" name="telegramm" value="telegramm" className="form-callback-type" {...register("communication")}/>Написать в Телеграм
                    </label>
                </div>
                <button type="submit" className="form-submit-btn" >Отправить заявку</button>
                <p className="form-policy-text">Нажимая кнопку “отправить заявку”, вы соглашаетесь <Link href="#" className="form-policy-underline">с политикой конфиденциальности</Link>.</p>
            </form>
        </section>
    );
};

export default Ready;
