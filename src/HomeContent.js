import React, {Component} from 'react';
import './index.css';

class HomeContent extends Component {

    constructor(){
        super();

        this.state = {
            backgroundPicNum: 0
        }
    }

    render(){

            return(
                <div className="homeContent">
                    <div className="homeContentHero">
                        <div className="homeContentHeroHeading"><h2>{this.props.sections[this.state.backgroundPicNum].title}</h2></div>
                    </div>

                    <div className="homeContentNext" onClick={()=> {if(this.state.backgroundPicNum < this.props.sections.length){this.state.backgroundPicNum++}; console.log(this.state.backgroundPicNum);}}><i className="fa fa-long-arrow-right"></i></div>
                    <div className="homeContentPrevious" onClick={()=> {if(this.state.backgroundPicNum > 0){this.state.backgroundPicNum--}; console.log(this.state.backgroundPicNum);}}><i className="fa fa-long-arrow-left"></i></div>

                    <div className="homeContentIndicator">
                        <div className="homeContentIndicatorDot dotOne"></div>
                        <div className="homeContentIndicatorDot dotTwo"></div>
                        <div className="homeContentIndicatorDot dotThree"></div>
                        <div className="homeContentIndicatorDot dotFour"></div>
                        <div className="homeContentIndicatorDot dotFive"></div>
                        <div className="homeContentIndicatorDot dotSix"></div>
                    </div>
                </div>
            )

    }
}

export default HomeContent;
