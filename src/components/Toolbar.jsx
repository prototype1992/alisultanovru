import React from 'react';

import {NavLink} from 'react-router-dom';

function Toolbar({ user }) {
    return (
        <header id="header-section" className="header-section mb-30 clearfix">
            <nav className="main-nav">
                <div className="nav-wrapper main-nav-wrapper">

                    <div className="topmenu hello_main_navigation hello_single_index_menu2">
                        <ul id="nav-mobile" className="topmenu__list main-nav-ul">
                            <li className='topmenu__item'>
                                <NavLink exact to="/" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Обо мне</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/skill" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Навыки</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/education" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Образование</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/portfolio" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Портфолио</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/testomonials" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Отзывы</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/workexperience" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Опыт работы</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/blog" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Блог</NavLink>
                            </li>
                            <li className='topmenu__item'>
                                <NavLink exact to="/contacts" activeClassName='top-menu-active' className="topmenu__link waves-effect default">Контакты</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Toolbar;