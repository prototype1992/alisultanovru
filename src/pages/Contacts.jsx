import React from 'react';

function Contacts() {
    return (
        <section>
            <h1 className="section-title">Контакты</h1>

            <div className='contact-wrap'>
                <div className="contact-left">
                    <div className="contact-item">
                        <h3>Телефон</h3>
                        <p>
                            <span>Мобильный.</span>+7 925 0492607
                        </p>
                        <p>
                            <span>Skype</span>termin05
                        </p>
                    </div>

                    <div className="contact-item">
                        <h3>email</h3>
                        <p>shoma.alisultanov@yandex.ru</p>
                        <p>a_shoma@mail.ru</p>
                    </div>
                </div>

                <form className="contact-right">
                    <h3>Напиши мне</h3>

                    <input type="text"/>

                    <input type="email"/>

                    <input type="text"/>

                    <textarea/>

                    <button>Отправить</button>
                </form>
            </div>
        </section>
    );
}

export default Contacts;
