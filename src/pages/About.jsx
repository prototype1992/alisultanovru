import React from 'react';

function About() {
    return (
        <section>
            <h1 className="section-title">Обо мне</h1>

            <div className='section-block'>

                <div className="section-block__item">
                    <h3>Верстка сайтов:</h3>
                    <ol>
                        <li>Знание HTML, Pug/Jade, JSX</li>
                        <li>Знание CSS, Less, Scss /Sass, Css-modules,</li>
                        <li>Кроссбраузерная верстка, стандартно IE10+ , есть опыт верстки под старые браузеры.</li>
                        <li>Большой опыт адаптивной верстки</li>
                        <li>Умею работать с CSS фреймворками (Bootstrap и остальное)</li>
                        <li>Табличная верстка (небольшой опыт верстки email рассылок)</li>
                    </ol>
                </div>

                <div className="section-block__item">
                    <h3>JavaScript:</h3>
                    <ol>
                        <li>EcmaScript 5, EcmaScript 6</li>
                        <li>JQuery, JQueryUI, ReactJS</li>
                        <li>Автоматизация Gulp, Webpack (опыт работы и настройки)</li>
                        <li>NodeJS</li>
                    </ol>
                </div>

                <div className="section-block__item">
                    <h3>Остальное:</h3>
                    <ol>
                        <li>Система контроля версий Git</li>
                        <li>Хорошо владею Photohop</li>
                        <li>PHP / MySQL (работа с шаблонами, простая работа с БД, отправка почты).</li>
                        <li>Большой опыт работы в команде.</li>
                        <li>Люблю спорт (футбол, теннис, пинпонг).</li>
                        <li>Без вредных привычек.</li>
                    </ol>
                </div>

            </div>

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
                        <li className='about-skills__item'>NodeJS</li>
                        <li className='about-skills__item'>PHP</li>
                        <li className='about-skills__item'>MySQL</li>
                        <li className='about-skills__item'>Git</li>
                        <li className='about-skills__item'>Adobe Photoshop</li>
                    </ul>
                </div>
            </div>

            <div className='section-block'>
                <h3 className="section-block__title">Образование</h3>

                <div>
                    <p>
                        <span>Учебное заведение: </span>
                        <strong>Дагестанский государственный институт народного хозяйства</strong>
                    </p>
                    <p>
                        <span>Город: </span>
                        <strong>Махачкала</strong>
                    </p>
                    <p>
                        <span>Годы учебы: </span>
                        <strong>2009 - 2014</strong>
                    </p>
                    <p>
                        <span>Факультет: </span>
                        <strong>Прикладной информатики в экономике</strong>
                    </p>
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