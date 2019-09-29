import React, {Component} from "react";
import AOS from "aos";
// import developer from "../../assets/images/home/developer-browser.svg";
import developer from "../../assets/images/home/programming.jpg";
import management from "../../assets/images/home/management.jpg";
import innovative from "../../assets/images/home/nasa.jpg";
import ValueCards from "./ValueCards";
import Fade from "react-reveal/Fade";
import laptop from "../../assets/images/home/image-mobile.jpg";

class Section4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "developers",
            image: developer,
            color: "#FF8080"

        };
    }

    changeView = (name, image, color) => {
        this.setState({word: name, image: image, color: color});
        this.forceUpdate();
    }

    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <React.Fragment>

                <div className="section-container" key={this.state.word}>
                    <Fade duration={2000}>
                        <div className="section-container section-value-image" key={this.state.word}
                             style={{backgroundImage: `url(${this.state.image})`}}>
                        </div>
                    </Fade>
                    <div className="section-wrapper">
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
                                    }}>We are developers</a>
                                    <a onClick={() => {
                                        this.changeView("innovative", innovative, "#455878")
                                    }}>We are innovative</a>
                                    <a onClick={() => {
                                        this.changeView("management", management)
                                    }}>We are management</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section4;
