import React from 'react';

function About() {
    return (
        <section>
            <h1 className="section-title">Обо мне</h1>

            <div className='section-block'>
                <h3 className="section-block__title">Навыки</h3>

                <div className='about-skills'>
                    <ul className='about-skills__list'>
                        <li className='about-skills__item'>HTML</li>
                        <li className='about-skills__item'>HTML5</li>
                        <li className='about-skills__item'>Pug / Jade</li>
                        <li className='about-skills__item'>CSS</li>
                        <li className='about-skills__item'>CSS3</li>
                        <li className='about-skills__item'>Кроссбраузерная верстка</li>
                        <li className='about-skills__item'>Адаптивная верстка</li>
                        <li className='about-skills__item'>Табличная верстка</li>
                        <li className='about-skills__item'>Bootstrap</li>
                        <li className='about-skills__item'>JavaScript</li>
                        <li className='about-skills__item'>jQuery</li>
                        <li className='about-skills__item'>React</li>
                        <li className='about-skills__item'>Git</li>
                        <li className='about-skills__item'>Adobe Photoshop</li>
                    </ul>
                </div>
            </div>

            <div className='section-block'>
                <h3 className="section-block__title">Образование</h3>

                <div>
                    Образование
                </div>
            </div>

            <div className='section-block'>
                <h3 className="section-block__title">Курсы и тренинги</h3>

                <div>
                    Курсы и тренинги
                </div>
            </div>

            <div className='section-block'>
                <h3 className="section-block__title">Сертификаты</h3>

                <div>
                    Сертификаты
                </div>
            </div>

            <div className='section-block'>
                <h3 className="section-block__title">Опыт работы</h3>

                <div>
                    Опыт работы
                </div>
            </div>
        </section>
    );
}

export default About;