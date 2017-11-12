import React from 'react';

function Contacts() {
    return (
        <section className="contact-me-section clearfix" id="contact">

            <div className="Section-title">
                <h2>
                    Контакты
                </h2>
            </div>

            <div className="row">
                <div className="col l6 m12 s12">
                    <div className="contact-left">

                        <div className="cont-item phone">
                            <h2 className="title mb-30">Телефон</h2>
                            <div className="cont-numbers">
                                <p>
                                    <span>Мобильный.</span>+7 925 0492607
                                </p>
                                <p>
                                    <span>Skype</span>termin05
                                </p>
                            </div>
                        </div>

                        <div className="cont-item email">
                            <h2 className="title mb-30">email</h2>
                            <div className="cont-numbers">
                                <p>shoma.alisultanov@yandex.ru</p>
                                <p>a_shoma@mail.ru</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col l6  s12">
                    <div className="contact-right clearfix">

                        <form action="#">

                            <h2 className="title mb-30">Напиши мне</h2>

                            <div className="input-field">
                                <input id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">Имя</label>
                            </div>

                            <div className="input-field">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input id="subject" type="text" className="validate"/>
                                <label htmlFor="subject">Тема письма</label>
                            </div>

                            <div className="input-field">
                                <textarea id="textarea1" className="materialize-textarea"/>
                                <label htmlFor="textarea1">Сообщение</label>
                            </div>

                            <a href="" className="custom-btn waves-effect">
                                <i className="fa fa-envelope-o"/>Отправить
                            </a>

                        </form>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contacts;
