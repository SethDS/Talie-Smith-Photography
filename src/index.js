import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomeView from './HomeView.js';
import About from './About.js';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={HomeView}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
