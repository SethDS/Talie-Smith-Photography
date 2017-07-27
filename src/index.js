import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import HomeView from './HomeView.js';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={HomeView}>

        </Route>
    </Router>,
    document.getElementById('root')
);
