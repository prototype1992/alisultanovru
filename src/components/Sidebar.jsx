import React from 'react';

function Sidebar() {
    return (
        <div className="fixed-left-side-body">
            <div className="profile">

                <h1 className="profile__site-name">Alisultanov.ru</h1>

                <div className="profile-image center-align">
                    <img src="./img/shamil.jpg" alt="shamil"/>
                </div>

                <div className="profile-name center-align">
                    <h1 className="user-name">Alisultanov Shamil</h1>
                    <p>
                        <span className="photoshop-color">Frontend Developer</span> in Leomax Group
                    </p>
                </div>

                <ul className="social-btn">
                    <li>
                        <a href="">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className="fa fa-twitter" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className="fa fa-behance" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className="fa fa-instagram" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className="fa fa-linkedin" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className="fa fa-dribbble" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>

                {/*<div className="discription clearfix">*/}
                    {/*<h2 className="title mb-30">what's in my mind</h2>*/}
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