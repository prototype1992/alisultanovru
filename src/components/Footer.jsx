import React from 'react';

function Footer({ children }) {
    return (
        <footer className="page-footer">
            <p>
                © 2006-2017 <a href="/">Alisultanov.ru</a>
                - Все права не защитить.
            </p>

            {/*<div className='backtotop'>*/}
                {/*<a href="" className='scroll'>*/}
                    {/*<i className="fa fa-long-arrow-up" aria-hidden="true"/>*/}
                {/*</a>*/}
            {/*</div>*/}
        </footer>
    );
}

export default Footer;
