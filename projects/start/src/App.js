import React from 'react';
import './App.scss';

import TechList from './components/TechList';

import MYLogo from './components/logo/MYLogo';
import ReactLogo from './components/logo/ReactLogo';
import NodeJSLogo from './components/logo/NodeJSLogo';
import WebpackLogo from './components/logo/WebpackLogo';
import SASSLogo from './components/logo/SASSLogo';
import BabelLogo from './components/logo/BabelLogo';

export default function App() {
    const techItems = [
        { id: '01', logo: <ReactLogo /> },
        { id: '02', logo: <NodeJSLogo /> },
        { id: '03', logo: <WebpackLogo /> },
        { id: '04', logo: <SASSLogo /> },
        { id: '05', logo: <BabelLogo /> }
    ];

    return (
        <div className="wrapper">
            <div>
                <MYLogo></MYLogo>
                <h1 className="title">// MY Start page</h1>
                <TechList items={techItems} />
            </div>
        </div>
    );
}
