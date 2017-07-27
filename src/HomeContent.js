import React, {Component} from 'react';

class HomeContent extends Component {

    constructor(){
        super();

        this.state = {
            backgroundPicNum: 0,
            indicatorDot: function(aNum){
                var theDot = document.getElementsByClassName('dot0');

                console.log(document.getElementsByClassName('dot0'));
                // theDot.style.backgroundColor = "white";
            }
        }
    };

    componentWillMount(){
            this.state.indicatorDot(this.state.backgroundPicNum);
    };

    render(){

            return(
                <div className="homeContent">
                    <div className="homeContentHero" style={{ backgroundImage: 'url(' + require( "" + this.props.sections[this.state.backgroundPicNum].picRef + "") + ')' }}>
                    <div className="homeContentHeroHeading"><h2>{this.props.sections[this.state.backgroundPicNum].title}</h2></div>
                    </div>

                    <div className="homeContentNext" onClick={()=> {if(this.state.backgroundPicNum < this.props.sections.length - 1){this.setState({backgroundPicNum: this.state.backgroundPicNum + 1})} console.log(this.state.backgroundPicNum);}}><i className="fa fa-long-arrow-right"></i></div>
                    <div className="homeContentPrevious" onClick={()=> {if(this.state.backgroundPicNum > 0){this.setState({backgroundPicNum: this.state.backgroundPicNum - 1})} console.log(this.state.backgroundPicNum);}}><i className="fa fa-long-arrow-left"></i></div>

                    <div className="homeContentIndicator">
                    <div className="homeContentIndicatorDot dot0"></div>
                    <div className="homeContentIndicatorDot dot1"></div>
                    <div className="homeContentIndicatorDot dot2"></div>
                    <div className="homeContentIndicatorDot dot3"></div>
                    <div className="homeContentIndicatorDot dot4"></div>
                    <div className="homeContentIndicatorDot dot5"></div>
                    </div>
                </div>
            )

    }

    componentDidMount(){

    }

}

export default HomeContent;



