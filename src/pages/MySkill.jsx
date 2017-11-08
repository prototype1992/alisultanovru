import React from 'react';

function MySkill() {
    return (
        <section className="my-skill-section sec-p100-bg-bs mb-30 clearfix" id="skill">
            <div className="Section-title">
                <h2>
                    <i className="fa fa-lightbulb-o" aria-hidden="true"/>
                    My Skills
                </h2>
                <span>My Skills</span>
                <p>
                    Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat
                    ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                    amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio
                    tincidunt.
                </p>
            </div>

            <div className="professional-skills-area">
                <ul className="tabs skills-tab ul-li">
                    <li className="tab tag-item tag-icon">
                        <i className="fa fa-tags" aria-hidden="true"/>
                    </li>
                    <li className="tab tag-item"><a href="#">#graphicdesign</a></li>
                    <li className="tab tag-item"><a href="#" className="active">#photography</a></li>
                    <li className="tab tag-item"><a href="#">#technology</a></li>
                    <li className="tab tag-item"><a href="#">#design</a></li>
                    <li className="tab tag-item"><a href="#">#webdevelopment</a></li>
                    <li className="tab tag-item"><a href="#">#application</a></li>
                </ul>
                <div id="graphicdesign">
                    <h2 className="title">professional skills</h2>

                    <div className="skill_progress">

                        <div className="row">
                            <div className="col l6 m6 s12">
                                <div className="single_experties">
                                    <div className="skilled-tittle">Photoshop</div>
                                    <div className="progress">
                                        <div className="progress-bar photoshop-bg wow Rx-width-65 animated"
                                             role="progressbar"
                                             data-wow-duration="0.5s" data-wow-delay=".5s" aria-valuenow="0"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span className="photoshop-color">65%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_experties">
                                    <div className="skilled-tittle">Jquery</div>
                                    <div className="progress">
                                        <div className="progress-bar jquery-bg wow Rx-width-60 animated"
                                             role="progressbar"
                                             data-wow-duration="1s" data-wow-delay=".15s" aria-valuenow="0"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span className="jquery-color">60%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_experties m-0">
                                    <div className="skilled-tittle">PHP</div>
                                    <div className="progress">
                                        <div className="progress-bar php-bg wow Rx-width-75 animated"
                                             role="progressbar"
                                             data-wow-duration="1.5s" data-wow-delay=".25s"
                                             aria-valuenow="0"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span className="php-color">75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col l6 m6 s12">
                                <div className="single_experties">
                                    <div className="skilled-tittle">HTML5</div>
                                    <div className="progress">
                                        <div className="progress-bar html5-bg wow Rx-width-45 animated"
                                             role="progressbar"
                                             data-wow-duration="0.5s" data-wow-delay=".5s" aria-valuenow="0"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span className="html5-color">45%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_experties">
                                    <div className="skilled-tittle">Css3</div>
                                    <div className="progress">
                                        <div className="progress-bar css3-bg wow Rx-width-65 animated"
                                             role="progressbar"
                                             data-wow-duration="1s" data-wow-delay=".15s" aria-valuenow="0"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span className="css3-color">65%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_experties m-0">
                                    <div className="skilled-tittle">Marketing</div>
                                    <div className="progress">
                                        <div className="progress-bar marketing-bg wow Rx-width-80 animated"
                                             role="progressbar"
                                             data-wow-duration="1.5s" data-wow-delay=".25s"
                                             aria-valuenow="0"
                                             aria-valuemin="0" aria-valuemax="100">
                                            <span className="marketing-color">80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="languages-skills">
                <div className="row">

                    <div className="col l6 m12 s12">
                        <div className="lang-skill-left">
                            <h2 className="title mb-30">languages skills</h2>

                            <p className="mb-30">
                                Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum
                                auctor, nisi
                                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit.
                            </p>

                            <a href="#" className="common-color">https://www.youtube.com</a>
                        </div>
                    </div>
                    <div className="col l6 m12 s12">
                        <div className="lang-skill-right">
                            <div className="skill-piechart">
                                <div className="first circle">
                                    <strong>HINDI</strong>
                                </div>
                            </div>


                            <div className="skill-piechart">
                                <div className="second circle">
                                    <strong>ENGLISH</strong>
                                </div>
                            </div>

                            <div className="skill-piechart">
                                <div className="third circle">
                                    <strong>DUTCH</strong>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default MySkill;