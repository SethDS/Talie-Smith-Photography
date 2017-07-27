import React, {Component} from 'react';

class AppHeader extends Component {

    constructor(){
        super();

    };

    componentWillMount(){

    };

    render(){

        return(
            <div className="appHomeHeader">
                <div className="appInitials"><h1>TS</h1></div>
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

    componentDidMount(){

    }

}

export default AppHeader;
