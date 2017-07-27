import React, {Component} from 'react';

class HomeContent extends Component {

    constructor(){
        super();

        this.state = {
            backgroundPicNum: 0
        }
    };

    componentWillMount(){

    };

    render(){

            return(
                <div className="homeContent">
                    <div className="homeContentHero" style={{ backgroundImage: 'url(' + require( "" + this.props.sections[this.state.backgroundPicNum].picRef + "") + ')' }}>
                    <div className="homeContentHeroHeading"><h2>{this.props.sections[this.state.backgroundPicNum].title}</h2></div>
                    </div>

                    <div className="homeContentNext" onClick={()=> {if(this.state.backgroundPicNum < this.props.sections.length - 1){this.setState({backgroundPicNum: this.state.backgroundPicNum + 1})} }}><i className="fa fa-long-arrow-right"></i></div>
                    <div className="homeContentPrevious" onClick={()=> {if(this.state.backgroundPicNum > 0){this.setState({backgroundPicNum: this.state.backgroundPicNum - 1})} }}><i className="fa fa-long-arrow-left"></i></div>

                    <div className="homeContentIndicator">
                            <div className={(this.state.backgroundPicNum!==0?"homeContentIndicatorDot":"theDot")}></div>
                            <div className={(this.state.backgroundPicNum!==1?"homeContentIndicatorDot":"theDot")}></div>
                            <div className={(this.state.backgroundPicNum!==2?"homeContentIndicatorDot":"theDot")}></div>
                            <div className={(this.state.backgroundPicNum!==3?"homeContentIndicatorDot":"theDot")}></div>
                            <div className={(this.state.backgroundPicNum!==4?"homeContentIndicatorDot":"theDot")}></div>
                            <div className={(this.state.backgroundPicNum!==5?"homeContentIndicatorDot":"theDot")}></div>
                    </div>
                </div>
            )

    }

    componentDidMount(){

    }

}

export default HomeContent;



