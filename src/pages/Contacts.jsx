import React from 'react';

function Contacts() {
    return (
        <section className="contact-me-section sec-p100-bg-bs mb-30 clearfix" id="contact">

            <div className="Section-title">
                <h2>
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    Контакты
                </h2>
            </div>

            <div className="row">
                <div className="col l6 m12 s12">
                    <div className="contact-left">

                        <div className="cont-item phone">
                            <h2 className="title mb-30">phone</h2>
                            <div className="cont-numbers">
                                <p>
                                    <span>Mob.</span>+0 123456789
                                </p>
                                <p>
                                    <span>Landline</span>+0 123456789
                                </p>
                                <p>
                                    <span>Skype</span>webstrot
                                </p>
                            </div>
                        </div>

                        <div className="cont-item email">
                            <h2 className="title mb-30">email</h2>
                            <div className="cont-numbers">
                                <p>support@example.com</p>
                                <p>support@example.com</p>
                            </div>
                        </div>

                        <div className="cont-item address">
                            <h2 className="title mb-30">address</h2>
                            <div className="cont-numbers">
                                <p>Street 110-B Kalani Bag, Dewas, M.P. INDIA</p>
                                <p><a href="" className="photoshop-color">https:example.com</a></p>
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
