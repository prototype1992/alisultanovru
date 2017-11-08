import React from 'react';

function Blog() {
    return (
        <section className="latest-news-section sec-p100-bg-bs mb-30 clearfix" id="blog">

            <div className="Section-title">
                <h2>
                    <i className="fa fa-newspaper-o" aria-hidden="true"/>
                    Latest News
                </h2>
                <span>Latest News</span>
                <p>
                    Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat
                    ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                    amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio
                    tincidunt.
                </p>
            </div>

            <div className="news-item clearfix">
                <div className="news-image b4-1 left">
                    {/*<img src="assets/images/news/news1.jpg" alt="Image"/>*/}
                </div>

                <div className="news-contant right left-align">
                    <h2 className="title">Creative Deisng News</h2>
                    <ul className="post-mate2">
                        <li className="pm-r25">By <a href="#">akshay</a></li>
                        <li className="pm-r25">11 march 2017</li>
                        <li className="pm-r25">4 comment</li>
                    </ul>
                    <p>
                        Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit
                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit. This is
                        Photoshop's version of
                        Lorem Ipsum. Proin gravida nibh.
                    </p>
                    <a href="#" className="custom-btn waves-effect waves-light">
                        <i className="fa fa-address-book-o" aria-hidden="true"/>
                        Read More
                    </a>
                </div>
            </div>

            <div className="news-item clearfix">
                <div className="news-image b4-2 right">
                    {/*<img src="assets/images/news/news2.jpg" alt="Image"/>*/}
                </div>

                <div className="news-contant left right-align">
                    <h2 className="title">Creative Deisng News</h2>
                    <ul className="post-mate2">
                        <li className="pm-r25">By <a href="#">akshay</a></li>
                        <li className="pm-r25">11 march 2017</li>
                        <li className="pm-r25">4 comment</li>
                    </ul>
                    <p>
                        Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit
                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit. This is
                        Photoshop's version of
                        Lorem Ipsum. Proin gravida nibh.
                    </p>
                    <a href="#" className="custom-btn waves-effect waves-light">
                        <i className="fa fa-address-book-o" aria-hidden="true"/>
                        Read More
                    </a>
                </div>
            </div>

            <div className="news-item clearfix">
                <div className="news-image b4-1 left">
                    {/*<img src="assets/images/news/news3.jpg" alt="Image">*/}
                </div>

                <div className="news-contant right left-align">
                    <h2 className="title">Creative Deisng News</h2>
                    <ul className="post-mate2">
                        <li className="pm-r25">By <a href="#">akshay</a></li>
                        <li className="pm-r25">11 march 2017</li>
                        <li className="pm-r25">4 comment</li>
                    </ul>
                    <p>
                        Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor,
                        nisi elit
                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit. This is
                        Photoshop's version of
                        Lorem Ipsum. Proin gravida nibh.
                    </p>
                    <a href="#" className="custom-btn waves-effect waves-light">
                        <i className="fa fa-address-book-o" aria-hidden="true"/>
                        Read More
                    </a>
                </div>
            </div>

            <ul className="pagination clearfix">
                <li className="left-arrow waves-effect left">
                    <a href="#"><i className="fa fa-long-arrow-left" aria-hidden="true"/></a>
                </li>

                <li className="waves-effect"><a href="#">01</a></li>
                <li className="active"><a href="#">02</a></li>
                <li className="waves-effect"><a href="#">03</a></li>

                <li className="right-arrow waves-effect right">
                    <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"/></a>
                </li>
            </ul>

        </section>
    );
}

export default Blog;
