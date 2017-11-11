import React from 'react';

function Portfolio() {
    return (
        <section className="my-portfolio-section sec-p100-bg-bs mb-30 clearfix"
                 id="portfolio">

            <div className="Section-title">
                <h2>
                    <i className="fa fa-briefcase" aria-hidden="true"/>
                    Портфолио
                </h2>
            </div>

            <div className="portfolio-area">

                <div id="filters" className="button-group">
                    <button className="button waves-effect default">all</button>
                    <button className="button waves-effect default">logos</button>
                    <button className="button waves-effect default">websites</button>
                    <button className="button waves-effect default">apps</button>
                    <button className="button waves-effect default">softwars</button>
                </div>

                <div className="grid">
                    <div className="element-item transition metal">
                        <div className="ei-child">
                            <img src="assets/images/portfolio/img-1.jpg" alt="img-1"/>
                            <a href="" className="more">
                                <i className="fa fa-plus"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item metalloid">
                        <div className="ei-child">
                            <img src="assets/images/portfolio/img-2.jpg" alt="img-2"/>
                            <a href="" className="more">
                                <i className="fa fa-plus"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item post-transition metal">
                        <div className="ei-child">
                            <img src="assets/images/portfolio/img-3.jpg" alt="img-3"/>
                            <a href="" className="more">
                                <i className="fa fa-plus"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item post-transition metal">
                        <div className="ei-child">
                            <img src="assets/images/portfolio/img-4.jpg" alt="img-4"/>
                            <a href="" className="more">
                                <i className="fa fa-plus"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item transition metal">
                        <div className="ei-child">
                            <img src="assets/images/portfolio/img-5.jpg" alt="img-5"/>
                            <a href="" className="more">
                                <i className="fa fa-plus"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item alkali metal">
                        <div className="ei-child">
                            <img src="assets/images/portfolio/img-6.jpg" alt="img-6"/>
                            <a href="" className="more">
                                <i className="fa fa-plus"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/*<a href="" className="custom-btn waves-effect waves-light">*/}
                    {/*<i className="fa fa-refresh"/>*/}
                    {/*load more*/}
                {/*</a>*/}
            </div>

        </section>
    );
}

export default Portfolio;