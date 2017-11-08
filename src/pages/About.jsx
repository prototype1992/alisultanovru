import React from 'react';

function About() {
    return (
        <section className="aboutme-section sec-p100-bg-bs mb-30 clearfix" id="about">
            <div className="Section-title">
                <h2>
                    <i className="fa fa-user-o" aria-hidden="true"/>
                    Обо мне
                </h2>
                <span>Обо мне</span>
                <p>
                    Hello,I’m Akshay Handge Creative Graphic Designer & User Experience Desiger based in
                    Website, I create
                    digital Products a more Beautiful and usable place. This is Photoshop's version of Lorem
                    Ipsum. Proin
                    gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum,
                    nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpuate cursus a sit amet
                    mauris. Morbi
                    accumsan ipsum velit. Nam nec tellus a odio tincidunt.
                </p>
            </div>

            <div className="personal-details-area">
                <div className="row">
                    <div className="col l6 m12 s12">
                        <div className="personal-details-left">
                            <ul className="service-list ul-li">
                                <li className="logodesign">
                                    <i className="fa fa-lightbulb-o" aria-hidden="true"/>
                                    <span className="service-name">logo design</span>
                                    <a href="#" className="more">
                                        <i className="fa fa-plus" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="website">
                                    <i className="fa fa-globe" aria-hidden="true"/>
                                    <span className="service-name">website</span>
                                    <a href="#" className="more">
                                        <i className="fa fa-plus" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="softwares">
                                    <i className="fa fa-desktop" aria-hidden="true"/>
                                    <span className="service-name">softwares</span>
                                    <a href="#" className="more">
                                        <i className="fa fa-plus" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="applications">
                                    <i className="fa fa-mobile" aria-hidden="true"/>
                                    <span className="service-name">applications</span>
                                    <a href="#" className="more">
                                        <i className="fa fa-plus" aria-hidden="true"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col l6 m12 s12">
                        <div className="personal-details-right">
                            <h2 className="title">personal details</h2>
                            <table>
                                <tbody>
                                <tr>
                                    <td className="td-w25">Full Name</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">Akshay Handge</td>
                                </tr>
                                <tr>
                                    <td className="td-w25">Father's Name</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">Mr. Deepak Handge</td>
                                </tr>
                                <tr>
                                    <td className="td-w25">Address</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">Street 110-B Kalani Bag, Dewas, M.P. INDIA</td>
                                </tr>
                                <tr>
                                    <td className="td-w25">Zip Code</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">12345</td>
                                </tr>
                                <tr>
                                    <td className="td-w25">Phone</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">+0 123456789 , +0 123456789</td>
                                </tr>
                                <tr>
                                    <td className="td-w25">Email</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">support@example.com</td>
                                </tr>
                                <tr>
                                    <td className="td-w25">Website</td>
                                    <td className="td-w10">:</td>
                                    <td className="td-w65">http://example.com</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="success">
                <div className="success-child-left">
                    <i className="fa fa-picture-o" aria-hidden="true"/>
                    <p>
                        Over Ten Year In The Game
                        With 550+ Projects Successfuly Done!
                    </p>
                </div>
                <div className="success-child-right">
                    <a href="#" className="hire-me waves-effect">
                        <i className="fa fa-envelope-o" aria-hidden="true"/> hire me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;