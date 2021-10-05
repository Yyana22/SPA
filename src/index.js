import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {  
    ReactDOM.render(
        <React.StrictMode>
                <App 
                state={state} 
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode> , document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


reportWebVitals();
