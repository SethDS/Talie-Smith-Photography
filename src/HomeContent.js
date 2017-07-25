import React, {Component} from 'react';
import './index.css';

class HomeContent extends Component {
    render(){
            return(
                <div className="homeContent">
                    <div className="homeContentHero">
                        <div className="homeContentHeroHeading"><h2>Family</h2></div>
                    </div>

                    <div className="homeContentNext"><i className="fa fa-long-arrow-right" ariaHidden="true"></i></div>
                    <div className="homeContentPrevious"><i className="fa fa-long-arrow-left" ariaHidden="true"></i></div>

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
