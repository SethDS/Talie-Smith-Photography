import React, {Component} from 'react';
import './index.css';

class HomeContent extends Component {
    render(){
            return(
                <div className="homeContent">
                    <div className="homeContentHero">
                        <img />
                        <div className="homeContentHeroHeading"><h2>Family</h2></div>
                    </div>

                    <div className="homeContentNext"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                    <div className="homeContentPrevious"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>

                    <div className="homeContentIndicator"></div>
                </div>
            )

    }
}

export default HomeContent;
