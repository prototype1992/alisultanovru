import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Footer from "./components/Footer";

import Home from './pages/Home';
import MySkill from './pages/MySkill';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Testomonials from './pages/Testomonials';
import Workexperience from './pages/Workexperience';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Services from './pages/Services';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>

                <div className="content">
                    <Toolbar />

                    <Route exact path='/' component={Home} />
                    <Route path='/skill' component={MySkill} />
                    <Route path='/services' component={Services} />
                    <Route path='/education' component={Education} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/testomonials' component={Testomonials} />
                    <Route path='/workexperience' component={Workexperience} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/contacts' component={Contacts} />

                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;