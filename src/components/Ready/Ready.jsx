import React from 'react';
import './ready.css';
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { HashLink as Link } from 'react-router-hash-link';
import 'react-phone-number-input/style.css';

function Ready(props) {

    const {
        register,
        formState: { errors, isValid },
        control,
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
                    <input type="text" maxLength="30" className={`form-user-data ${errors?.name ? "form-user-data-error" : "form-user-data-ok"}`} placeholder='Введите имя'
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
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            validate: (value) => {
                                isValidPhoneNumber((value ?? 0).toString())
                            },
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                required
                                className={`form-user-data ${isValidPhoneNumber((value ?? 0).toString()) ? "form-user-data-ok" : "form-user-data-error"}`}
                                displayInitialValueAsLocalNumber
                                international
                                value={value}
                                onChange={onChange}
                                defaultCountry="RU"
                                limitMaxLength
                                id="popup-phone"
                                rules={{ required: true }}
                            />
                        )}
                    />
                    {/* <input type="tel" className={`form-user-data form-user-data-tel ${errors?.phone && "form-user-data-error"} ${isValid && "form-user-data-ok"}`} placeholder='Введите номер телефона'
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
                    /> */}
                </div>
                <textarea className={`form-message ${errors?.message ? "form-user-data-error" : "form-user-data-ok"}`} maxLength="1000" placeholder='Опишите вашу проблему'
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
                        <input type="radio" name="telefone" value="telefone" className="form-callback-type" {...register("communication")} />Связаться по телефону
                    </label>
                    <label className="form-radio-text">
                        <input type="radio" name="watsapp" value="watsapp" className="form-callback-type" {...register("communication")} />Написать в WhatsApp
                    </label>
                    <label className="form-radio-text">
                        <input type="radio" name="telegramm" value="telegramm" className="form-callback-type" {...register("communication")} />Написать в Телеграм
                    </label>
                </div>
                <button type="submit" className="form-submit-btn" >Отправить заявку</button>
                <p className="form-policy-text">Нажимая кнопку “отправить заявку”, вы соглашаетесь <Link href="#" className="form-policy-underline">с политикой конфиденциальности</Link>.</p>
            </form>
        </section>
    );
};

export default Ready;
