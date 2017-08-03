import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomeView from './HomeView.js';
import About from './About.js';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Redirect exact to={HomeView}></Redirect>
            <Route path="/about" component={About}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
