import React from 'react';

import Topmenuitem from './Topmenuitem';

function Toolbar() {
    return (
        <header id="header-section" className="header-section mb-30 clearfix">
            <nav className="main-nav">
                <div className="nav-wrapper main-nav-wrapper">

                    <div className="topmenu hello_main_navigation hello_single_index_menu2">
                        <ul id="nav-mobile" className="topmenu__list main-nav-ul">
                            <li className='topmenu__item'>
                                <Topmenuitem to='/'>Главная</Topmenuitem>
                            </li>
                            <li className='topmenu__item'>
                                <Topmenuitem to='/about'>Обо мне</Topmenuitem>
                            </li>
                            <li className='topmenu__item'>
                                <Topmenuitem to='/services'>Услуги</Topmenuitem>
                            </li>
                            <li className='topmenu__item'>
                                <Topmenuitem to='/portfolio'>Портфолио</Topmenuitem>
                            </li>
                            <li className='topmenu__item'>
                                <Topmenuitem to='/testomonials'>Отзывы</Topmenuitem>
                            </li>
                            <li className='topmenu__item'>
                                <Topmenuitem to='/projects'>Проекты</Topmenuitem>
                            </li>
                            <li className='topmenu__item'>
                                <Topmenuitem to='/contacts'>Контакты</Topmenuitem>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Toolbar;