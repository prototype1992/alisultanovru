import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Pages from './Pages';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>
                
                <Pages />
            </div>
        );
    }
}

export default App;