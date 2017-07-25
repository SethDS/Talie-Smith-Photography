import React, { Component } from 'react';
import HomeContent from './HomeContent.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHomeHeader">
            <div className="appInitials"><h1>TS</h1></div>
            <div className="homeMenu">
              <div className="menuSection"></div>
              <div className="menuSection"></div>
              <div className="menuSection"></div>
            </div>
            <div className="homeFollow">
                <h3 className="followItem">follow</h3>
                <i className="fa fa-plus-circle followItem" ariaHidden="true"></i>
            </div>
        </div>

          <HomeContent />
      </div>

    );
  }
}

export default App;
