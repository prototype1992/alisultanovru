import React from 'react';

function Portfolio() {
    return (
        <section className="my-portfolio-section sec-p100-bg-bs mb-30 clearfix"
                 id="portfolio">

            <div className="Section-title">
                <h2>
                    <i className="fa fa-briefcase" aria-hidden="true"/>
                    Мое портфолио
                </h2>
                <span>My Portfolio</span>
                <p>
                    Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat
                    ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                    amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio
                    tincidunt.
                </p>
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
                    <div className="element-item transition metal" data-category="transition">
                        <div className="ei-child">
                            {/*<img src="assets/images/portfolio/img-1.jpg" alt="Image"/>*/}
                            <a href="#" className="more">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item metalloid" data-category="metalloid">
                        <div className="ei-child">
                            {/*<img src="assets/images/portfolio/img-2.jpg" alt="Image"/>*/}
                            <a href="#" className="more">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item post-transition metal" data-category="post-transition">
                        <div className="ei-child">
                            {/*<img src="assets/images/portfolio/img-3.jpg" alt="Image"/>*/}
                            <a href="#" className="more">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item post-transition metal" data-category="post-transition">
                        <div className="ei-child">
                            {/*<img src="assets/images/portfolio/img-4.jpg" alt="Image"/>*/}
                            <a href="#" className="more">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item transition metal" data-category="transition">
                        <div className="ei-child">
                            {/*<img src="assets/images/portfolio/img-5.jpg" alt="Image"/>*/}
                            <a href="#" className="more">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="element-item alkali metal" data-category="alkali">
                        <div className="ei-child">
                            {/*<img src="assets/images/portfolio/img-6.jpg" alt="Image"/>*/}
                            <a href="#" className="more">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="#" className="custom-btn waves-effect waves-light">
                    <i className="fa fa-refresh" aria-hidden="true"/>
                    load more
                </a>
            </div>

        </section>
    );
}

export default Portfolio;