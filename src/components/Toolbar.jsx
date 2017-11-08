import React from 'react';

function Toolbar({ user }) {
    return (
        <header id="header-section" className="header-section mb-30 clearfix">
            <nav className="main-nav">
                <div className="nav-wrapper main-nav-wrapper">

                    {/*<ul className="alternative-menu ul-li responsive_menu_fixed">*/}

                    {/*<li className="alt-search-area">*/}
                    {/*<form action="#">*/}
                    {/*<input className="alternative-search" type="search"*/}
                    {/*placeholder="search"/>*/}
                    {/*<button><i className="fa fa-search"/></button>*/}
                    {/*</form>*/}
                    {/*</li>*/}

                    {/*<li className="side-menu-btn right">*/}
                    {/*<a href="#" className="button-collapse waves-effect default"*/}
                    {/*data-activates="mobile-demo">*/}
                    {/*<i className="fa fa-bars" aria-hidden="true"/>*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*</ul>*/}

                    {/*<div className=" hello_icon_menu hello_single_index_menu1">*/}
                    {/*<ul className="ul-li-block side-nav" id="mobile-demo">*/}

                    {/*<li className="sn-user">*/}
                    {/*<span className="sn-user-img">*/}
                    {/*<img src="assets/images/akshay1.png" alt="Image"/>*/}
                    {/*</span>*/}
                    {/*<span className="sn-user-name">Akshay</span>*/}
                    {/*<a href="#" className="sn-cv-link common-color">download cv</a>*/}
                    {/*</li>*/}

                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-home" aria-hidden="true"/>*/}
                    {/*Главная*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-user-o" aria-hidden="true"/>*/}
                    {/*Обо мне*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-lightbulb-o" aria-hidden="true"/>*/}
                    {/*Навыки*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-graduation-cap" aria-hidden="true"/>*/}
                    {/*Образование*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-briefcase" aria-hidden="true"/>*/}
                    {/*Портфолио*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-quote-left" aria-hidden="true"/>*/}
                    {/*Отзывы*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-pencil" aria-hidden="true"/>*/}
                    {/*Опыт работы*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-newspaper-o" aria-hidden="true"/>*/}
                    {/*Блог*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="sn-item">*/}
                    {/*<a href="#" className="waves-effect">*/}
                    {/*<i className="fa fa-envelope-o" aria-hidden="true"/>*/}
                    {/*Контакты*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    <div className="hello_main_navigation hello_single_index_menu2">
                        <ul id="nav-mobile" className="right main-nav-ul">
                            <li className="active">
                                <a href="/" className="waves-effect default">Обо мне</a>
                            </li>
                            <li>
                                <a href="/skill" className="waves-effect default">Навыки</a>
                            </li>
                            <li>
                                <a href="/education" className="waves-effect default">Образование</a>
                            </li>
                            <li>
                                <a href="/portfolio" className="waves-effect default">Портфолио</a>
                            </li>
                            <li>
                                <a href="/testomonials" className="waves-effect default">Отзывы</a>
                            </li>
                            <li>
                                <a href="/workexperience" className="waves-effect default">Опыт работы</a>
                            </li>
                            <li>
                                <a href="/blog" className="waves-effect default">Блог</a>
                            </li>
                            <li>
                                <a href="/contacts" className="waves-effect default">Контакты</a>
                            </li>
                            {/*<li>*/}
                            {/*<a href="#" className="waves-effect default cd-search-trigger">*/}
                            {/*<i className="fa fa-search" aria-hidden="true"/>*/}
                            {/*</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>


                    <div className="hello_menu_fixed_main_wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="hello_logo_wrapper">
                                    <div className="hello_logo">
                                        <img src="assets/images/Hello_logo.png" alt="hello_logo"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                <div className="hello_fixed_nav_wrapper hello_single_index_menu3">
                                    <ul className="hello_nav_fixed">
                                        <li><a href="#" className="nav-mobile">home</a></li>
                                        <li><a href="#" className="waves-effect default">about</a></li>
                                        <li><a href="#" className="waves-effect default">skill</a></li>
                                        <li><a href="#" className="waves-effect default">education</a>
                                        </li>
                                        <li><a href="#" className="waves-effect default">portfolio</a>
                                        </li>
                                        <li><a href="#" className="waves-effect default">testimonial</a>
                                        </li>
                                        <li><a href="#" className="waves-effect default">exprience</a>
                                        </li>
                                        <li><a href="#" className="waves-effect default">blog</a></li>
                                        <li><a href="#" className="waves-effect default">contact</a>
                                        </li>
                                        {/*<li>*/}
                                        {/*<a href="#"*/}
                                        {/*className="waves-effect default cd-search-trigger">*/}
                                        {/*<i className="fa fa-search" aria-hidden="true"/>*/}
                                        {/*</a>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/*<div id="cd-search" className="cd-search">*/}
                {/*<form action="#">*/}
                    {/*<input type="search" placeholder="Search..."/>*/}
                {/*</form>*/}
            {/*</div>*/}

        </header>
    );
}

export default Toolbar;