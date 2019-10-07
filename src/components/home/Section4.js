import React, {Component} from "react";
import AOS from "aos";
// import developer from "../../assets/images/home/developer-browser.svg";
import developer from "../../assets/images/home/programming.jpg";
import management from "../../assets/images/home/management.jpg";
import innovative from "../../assets/images/home/nasa.jpg";

import developerIcon from "../../assets/images/home/management.svg"
import Fade from "react-reveal/Fade";
import {getScrollPosition} from "../shared/Functions";

class Section4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon:developerIcon,
            word: "developers",
            image: developer,
            color: "#FF8080"
        };
    }

    changeView = (name, image, color) => {
        this.setState({word: name, image: image, color: color});
        this.forceUpdate();
    };

    componentDidMount() {
        AOS.init();
        // const props = this.props;
        // window.addEventListener("scroll", function _scrollHandler(){
        //     getScrollPosition("about", props)
        // })
    }

    // componentWillUnmount() {
    //     const props = this.props;
    //     window.removeEventListener("scroll", function _scrollHandler(){
    //         getScrollPosition("about", props)
    //     })
    // }

    render() {
        return (
                <div id="about" className="section-container " key={this.state.word}>
                    <div className="services-wrapper" style={{backgroundImage:`${this.props.backgroundColor}`, color:`${this.props.color}`}}>
                        <h1>{this.props.sectionTitle}</h1>
                        <p>{[this.props.sectionText]}</p>
                    </div>

                    <div className="section-wrapper flex-center">
                        <Fade duration={3000}>
                            <div className="section-container section-value-image no-padding mobile-no-gradient" key={this.state.word}
                                 style={{backgroundImage: `url(${this.state.image})`}}>
                                <img className="section-icons" src={this.state.icon}/>
                            </div>
                        </Fade>
                        <div className="section-cover-text cover-value">
                            <div className="section-text section-value">
                                <span data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out"
                                      data-aos-anchor-placement="top"
                                      data-aos-duration="600" style={{display: "inline"}}>
                                    <h1
                                    style={{color: "black", display: "inline"}}>We are&nbsp;</h1>

                                    <h1 style={{color: this.state.color, display: "inline"}}
                                    className={"section-title-animation"}
                                    key={this.state.word + "title"}>
                                    {this.state.word}
                                    </h1>
                                 </span>
                                <p data-aos="fade" data-aos-delay="200" data-aos-easing="ease-in-out"
                                   data-aos-anchor-placement="top"
                                   data-aos-duration="600">
                                    We focus on designing websites with the highest quality of
                                    standard. These websites perceed your everyday imagination.
                                    Therefore its only more than usual that you decide to build a
                                    website at ASRR. We assrelerate in building wbesites using the
                                    lastest of the lastest techniques.
                                </p>
                                <div className="section-value-key">
                                    <a onClick={() => {
                                        this.changeView("developers", developer, "#FF8080")
                                    }} style={{fontWeight:this.state.word ==="developers"? "bold": ""}}>We are developers</a>
                                    <a onClick={() => {
                                        this.changeView("innovative", innovative, "#455878")
                                    }}style={{fontWeight:this.state.word ==="innovative"? "bold": ""}}>We are innovative</a>
                                    <a onClick={() => {
                                        this.changeView("management", management)
                                    }} style={{fontWeight:this.state.word ==="management"? "bold": ""}}>We are management</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Section4;
