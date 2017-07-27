import React, {Component} from 'react';
import HomeContent from './HomeContent.js';
import AppHeader from './AppHeader.js';

class HomeView extends Component {

    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: "Family",
                    picRef: "./images/family.jpg",
                    path: "something..",
                    navDot: "dotzero"
                },
                {
                    title: "Portrait",
                    picRef: "./images/portrait.jpg",
                    path: "something...",
                    navDot: "dotone"
                },
                {
                    title: "Travel",
                    picRef: "./images/travel.jpg",
                    path: "something...",
                    navDot: "dottwo"
                },
                {
                    title: "Browse All",
                    picRef: "./images/browse-all.jpg",
                    path: "something",
                    navDot: "dotthree"
                },
                {
                    title: "Contact",
                    picRef: "./images/contact.jpg",
                    path: "something",
                    navDot: "dotfour"
                },
                {
                    title: "About",
                    picRef: "./images/about.jpg",
                    path: "something...",
                    navDot: "dotfive"
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <HomeContent sections={this.state.sections} />
            </div>

        );
    }
}

export default HomeView;