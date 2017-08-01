import React, {Component} from 'react';
import AppHeader from './AppHeader'

class About extends Component {

    render(){
        return (
            <div className="about-main-container">
                <AppHeader/>
                <h1>About Me</h1>
            </div>
        )
    }
}

export default About;