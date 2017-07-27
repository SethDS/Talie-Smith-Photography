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

                    <div className="homeContentNext" onClick={()=> {if(this.state.backgroundPicNum < this.props.sections.length - 1){this.setState({backgroundPicNum: this.state.backgroundPicNum + 1})} console.log(this.state.backgroundPicNum);}}><i className="fa fa-long-arrow-right"></i></div>
                    <div className="homeContentPrevious" onClick={()=> {if(this.state.backgroundPicNum > 0){this.setState({backgroundPicNum: this.state.backgroundPicNum - 1})} console.log(this.state.backgroundPicNum);}}><i className="fa fa-long-arrow-left"></i></div>

                    <div className="homeContentIndicator">
                            <div className="homeContentIndicatorDot" ref={ (dot) => { if(this.state.backgroundPicNum === 0){dot.className = "theDot"} else{dot.className = "homeContentIndicatorDot"} } }></div>
                            <div className="homeContentIndicatorDot" ref={ (dot) => { if(this.state.backgroundPicNum === 1){dot.className = "theDot"} else{dot.className = "homeContentIndicatorDot"} } }></div>
                            <div className="homeContentIndicatorDot" ref={ (dot) => { if(this.state.backgroundPicNum === 2){dot.className = "theDot"} else{dot.className = "homeContentIndicatorDot"} } }></div>
                            <div className="homeContentIndicatorDot" ref={ (dot) => { if(this.state.backgroundPicNum === 3){dot.className = "theDot"} else{dot.className = "homeContentIndicatorDot"} } }></div>
                            <div className="homeContentIndicatorDot" ref={ (dot) => { if(this.state.backgroundPicNum === 4){dot.className = "theDot"} else{dot.className = "homeContentIndicatorDot"} } }></div>
                            <div className="homeContentIndicatorDot" ref={ (dot) => { if(this.state.backgroundPicNum === 5){dot.className = "theDot"} else{dot.className = "homeContentIndicatorDot"} } }></div>
                    </div>
                </div>
            )

    }

    componentDidMount(){

    }

}

export default HomeContent;



