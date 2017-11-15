import React from 'react';

import Topmenuitem from './Topmenuitem';

function Toolbar() {
    return (
        <header className="page-header">
            <nav className="topmenu">
                <ul className="topmenu__list">
                    <li className='topmenu__item'>
                        <Topmenuitem to='/'>Главная</Topmenuitem>
                    </li>
                    <li className='topmenu__item'>
                        <Topmenuitem to='/about'>Обо мне</Topmenuitem>
                    </li>
                    <li className='topmenu__item'>
                        <Topmenuitem to='/services'>Услуги и цены</Topmenuitem>
                    </li>
                    <li className='topmenu__item'>
                        <Topmenuitem to='/portfolio'>Портфолио</Topmenuitem>
                    </li>
                    {/*<li className='topmenu__item'>*/}
                        {/*<Topmenuitem to='/testomonials'>Отзывы</Topmenuitem>*/}
                    {/*</li>*/}
                    <li className='topmenu__item'>
                        <Topmenuitem to='/contacts'>Контакты</Topmenuitem>
                    </li>
                    <li className='topmenu__item'>
                        <Topmenuitem to='/music'>Моя музыка</Topmenuitem>
                    </li>
                    <li className='topmenu__item'>
                        <Topmenuitem to='/journey'>Путешествие</Topmenuitem>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Toolbar;