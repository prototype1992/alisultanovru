import React from 'react';

function Contacts() {
    return (
        <section>
            <h1 className="section-title">Контакты</h1>

            <div className='contact-wrap'>
                <div className="contact-left">
                    <div className="contact-item">
                        <h3 className='contact-wrap__title'>Телефон</h3>
                        <p>
                            <span>Мобильный: </span>
                            <strong>+7 925 0492607</strong>
                        </p>
                        <p>
                            <span>Skype: </span>
                            <strong>termin05</strong>
                        </p>
                    </div>

                    <div className="contact-item">
                        <h3 className='contact-wrap__title'>email</h3>
                        <p>shoma.alisultanov@yandex.ru</p>
                        <p>a_shoma@mail.ru</p>
                    </div>
                </div>

                <form className="contact-right">
                    <div className="contact-item">
                        <h3 className='contact-wrap__title'>Написать письмо</h3>

                        <input type="text" className='contact-input' placeholder='Ваше имя'/>

                        <input type="email" className='contact-input' placeholder='Ваш email'/>

                        <input type="text" className='contact-input' placeholder='Тема письма'/>

                        <textarea className='contact-textarea' placeholder='Текст сообщения...'/>

                        <button className='contact-submit'>Отправить</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacts;
