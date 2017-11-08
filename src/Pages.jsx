import React from 'react';
import {Route} from 'react-router-dom';


import Toolbar from './components/Toolbar';

// pages
import About from './pages/About';
import MySkill from './pages/MySkill';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Testomonials from './pages/Testomonials';
import Workexperience from './pages/Workexperience';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';

export default class Page extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="right-side-body">

                    <Toolbar />

                    <Route exact path='/' component={About} />
                    <Route path='/skill' component={MySkill} />
                    <Route path='/education' component={Education} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/testomonials' component={Testomonials} />
                    <Route path='/workexperience' component={Workexperience} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/contacts' component={Contacts} />

                    <footer id="footer-section" className="footer-section clearfix">
                        <p>
                            © 2006-2017 <a href="#" className="photoshop-color">Akshay Handge</a>
                        </p>

                        <div className='backtotop'>
                            <a href="#" className='scroll'>
                                <i className="fa fa-long-arrow-up" aria-hidden="true"/>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}
