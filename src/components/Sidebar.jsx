import React from 'react';

import topics from '../data/topics';

function Sidebar() {
    return (
        <div className="fixed-left-side-body">
            <div className="profile">
                <div className="profile-image center-align">
                    <img src="https://pp.userapi.com/c627127/v627127752/15d54/xpEMbTga8sA.jpg" alt="Image"/>
                </div>

                <div className="profile-name center-align">
                    <h1 className="user-name">Alisultanov Shamil</h1>
                    <p>
                        <span className="photoshop-color">Frontend Developer</span> in Leomax Group
                    </p>
                </div>

                <ul className="social-btn">
                    <li>
                        <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-behance" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-dribbble" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>

                <div className="discription clearfix">
                    <h2 className="title mb-30">what's in my mind</h2>
                    <p>
                        We can develop and design anything beyond your ima gination. About our work, we don’t
                        say anything bec
                        ause our work speaks. For more, you can ask our clie nts and they will tell you how much
                        satisfied they
                        are with our services. So, what are you waiting for?
                    </p>
                </div>

                <div className="cv-btn">
                    <a href="#" className="custom-btn waves-effect waves-light">
                        <i className="fa fa-download" aria-hidden="true"/>
                        download cv
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;