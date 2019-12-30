import React from 'react';
import './App.scss';

import MYLogo from './components/logo/MYLogo';

function App() {
    return (
        <div className="wrapper">
            <div>
                <MYLogo></MYLogo>
                <h1 className="title">MY Start page</h1>
            </div>
        </div>
    );
}

export default App;
