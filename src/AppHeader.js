import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class AppHeader extends Component {


    render(){

        return(
            <div className="appHomeHeader">
                <div className="appInitials"><Link to="/"><h1>TS</h1></Link></div>
                <div className="homeMenu">
                    <div className="menuSection"></div>
                    <div className="menuSection"></div>
                    <div className="menuSection"></div>
                </div>
                <div className="homeFollow">
                    <h3 className="followItem">follow</h3>
                    <i className="fa fa-plus-circle followItem"></i>
                </div>
            </div>
        )

    }

}

export default AppHeader;
