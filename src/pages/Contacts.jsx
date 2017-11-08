import React from 'react';

function Contacts() {
    return (
        <section className="contact-me-section sec-p100-bg-bs mb-30 clearfix" id="contact">

            <div className="Section-title">
                <h2>
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    contact me
                </h2>
                <span>contact me</span>
                <p>
                    Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat
                    ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                    amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio
                    tincidunt.
                </p>
            </div>

            <div className="row">
                <div className="col l6 m12 s12">
                    <div className="contact-left">

                        <div className="cont-item phone">
                            <h2 className="title mb-30">phone</h2>
                            <div className="cont-numbers">
                                <p>
                                    <span>Mob.</span>+0 123456789
                                </p>
                                <p>
                                    <span>Landline</span>+0 123456789
                                </p>
                                <p>
                                    <span>Skype</span>webstrot
                                </p>
                            </div>
                        </div>

                        <div className="cont-item email">
                            <h2 className="title mb-30">email</h2>
                            <div className="cont-numbers">
                                <p>support@example.com</p>
                                <p>support@example.com</p>
                            </div>
                        </div>

                        <div className="cont-item address">
                            <h2 className="title mb-30">address</h2>
                            <div className="cont-numbers">
                                <p>Street 110-B Kalani Bag, Dewas, M.P. INDIA</p>
                                <p><a href="#" className="photoshop-color">https:example.com</a></p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col l6  s12">
                    <div className="contact-right clearfix">

                        <form action="#">

                            <h2 className="title mb-30">here me</h2>

                            <div className="input-field">
                                <input id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>

                            <div className="input-field">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            </div>

                            <div className="input-field">
                                <input id="subject" type="text" className="validate"/>
                                <label htmlFor="subject">Subject</label>
                            </div>

                            <div className="input-field">
                                <textarea id="textarea1" className="materialize-textarea"/>
                                <label htmlFor="textarea1">message</label>
                            </div>

                            <a href="#" className="custom-btn waves-effect">
                                <i className="fa fa-envelope-o" aria-hidden="true"/>
                                send
                            </a>

                        </form>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contacts;
