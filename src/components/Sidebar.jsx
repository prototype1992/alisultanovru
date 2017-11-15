import React from 'react';

import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile">

                <h1 className="profile__site-name">Alisultanov.ru</h1>

                <div className="profile-image">
                    <img src="./img/shamil.jpg" alt="shamil"/>
                </div>

                <div className="profile-name">
                    <h2 className="profile-name__title">Alisultanov Shamil</h2>
                    <p>
                        <strong>Frontend Developer</strong> в <strong>Leomax Group</strong>
                    </p>
                </div>

                <div className="profile-btns">
                    <Link to="/login">Авторизация</Link>
                    <Link to="/contacts">Написать письмо</Link>
                    {/*<Link to="/portfolio">Посмотреть работы</Link>*/}
                </div>

                {/*<div className="profile-discription">*/}
                    {/*<h2>what's in my mind</h2>*/}
                    {/*<p>*/}
                        {/*We can develop and design anything beyond your ima gination. About our work, we don’t*/}
                        {/*say anything bec*/}
                        {/*ause our work speaks. For more, you can ask our clie nts and they will tell you how much*/}
                        {/*satisfied they*/}
                        {/*are with our services. So, what are you waiting for?*/}
                    {/*</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Sidebar;