import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route, Link } from 'react-router-dom';
import HomeView from './HomeView.js';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={HomeView}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
