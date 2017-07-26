import React, { Component } from 'react';
import HomeContent from './HomeContent.js';
import './index.css';

class App extends Component {

    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: "Family",
                    picRef: "./images/family.jpg",
                    path: "something.."
                },
                {
                    title: "Portrait",
                    picRef: "./images/portrait.jpg",
                    path: "something..."
                },
                {
                    title: "Travel",
                    picRef: "./images/travel.jpg",
                    path: "something..."
                },
                {
                    title: "Browse All",
                    picRef: "./images/browse-all.jpg",
                    path: "something"
                },
                {
                    title: "Contact",
                    picRef: "./images/contact.jpg",
                    path: "something"
                },
                {
                    title: "About",
                    picRef: "./images/about.jpg",
                    path: "something..."
                }
            ]
        }
    }

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
                <i className="fa fa-plus-circle followItem"></i>
            </div>
        </div>

          <HomeContent sections={this.state.sections} />
      </div>

    );
  }
}

export default App;
