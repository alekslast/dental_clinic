//----------------------------Packages----------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';

//---------------------------/Packages----------------------------


//---------------------------Components---------------------------

import App from './App';
//--------------------------/Components---------------------------

//-----------------------------Styles-----------------------------

import './styles.css';

//----------------------------/Styles-----------------------------



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
