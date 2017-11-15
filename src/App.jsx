import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from "./components/Footer";

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Testomonials from './pages/Testomonials';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import Journey from './pages/Journey';
import Login from './pages/Login';
import Music from "./pages/Music";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>

                <div className="content">
                    <Header />

                    <div className="content__inner">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route path='/services' component={Services} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/testomonials' component={Testomonials} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/login' component={Login} />
                        <Route path='/journey' component={Journey} />
                        <Route path='/music' component={Music} />
                    </div>

                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
