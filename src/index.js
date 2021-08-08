import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


ReactDOM.render( 
    <React.StrictMode >
        <div className="Wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);