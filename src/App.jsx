import React, { Component } from 'react';

import {Route} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

// pages
import Home from './pages/Home';
import Page from './Page';
import About from './pages/About';
import Books from './pages/Books';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>
                
                <Content>
                    <Route exact path='/' component={Home} />
                    <Route path='/page' component={Page} />
                    <Route path='/about' component={About} />
                    <Route path='/books' component={Books} />
                </Content>
            </div>
        );
    }
}

export default App;