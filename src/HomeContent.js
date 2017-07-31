//mojs react-motion
//CSS/JS/Styles => great for small sequences and simple interactions
//Once you get more than three, switch to:
//GSAP, great for sequencing and complex movement, cross-browser consistency
//React-Motion, great for single movements you'd like to look realistic, not meant for sequencing.
//React-Move, similar to react-motion, small flexible
//Velocity-React, like GSAP, less bells and whistles
// opacity and transforms are most preformant ways to animate
//react-transition-group-plus


import React, {Component} from 'react';
import { TweenMax } from 'gsap';

class HomeContent extends Component {

    constructor() {
        super();

        this.state = {
            backgroundPicNum: 0,
            changeHero: function (element) {
                console.log(element.style);

            }
        }
    };



        render(){

            return (
                <div className="homeContent">
                    <div className="homeContentHero" ref={(el) => {
                        this.contentHero = el
                    }}
                         style={{backgroundImage: 'url(' + require("" + this.props.sections[this.state.backgroundPicNum].picRef + "") + ')'}}>
                        <div className="homeContentHeroHeading">
                            <h2>{this.props.sections[this.state.backgroundPicNum].title}</h2></div>
                    </div>

                    <div className="homeContentNext" onClick={() => {
                        this.state.changeHero(this.contentHero);
                        if (this.state.backgroundPicNum < this.props.sections.length - 1) {
                            this.setState({backgroundPicNum: this.state.backgroundPicNum + 1})
                        }
                    }  }>
                        <i className="fa fa-long-arrow-right"></i>
                    </div>
                    <div className="homeContentPrevious" onClick={() => {
                        if (this.state.backgroundPicNum > 0) {
                            this.setState({backgroundPicNum: this.state.backgroundPicNum - 1})
                        }
                    }
                    }>
                        <i className="fa fa-long-arrow-left"></i>
                    </div>

                    <div className="homeContentIndicator">
                        <div
                            className={(this.state.backgroundPicNum !== 0 ? "homeContentIndicatorDot" : "theDot")}></div>
                        <div
                            className={(this.state.backgroundPicNum !== 1 ? "homeContentIndicatorDot" : "theDot")}></div>
                        <div
                            className={(this.state.backgroundPicNum !== 2 ? "homeContentIndicatorDot" : "theDot")}></div>
                        <div
                            className={(this.state.backgroundPicNum !== 3 ? "homeContentIndicatorDot" : "theDot")}></div>
                        <div
                            className={(this.state.backgroundPicNum !== 4 ? "homeContentIndicatorDot" : "theDot")}></div>
                        <div
                            className={(this.state.backgroundPicNum !== 5 ? "homeContentIndicatorDot" : "theDot")}></div>
                    </div>
                </div>
            )

        }
}

export default HomeContent;



