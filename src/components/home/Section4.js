import React, { Component } from "react";
import AOS from "aos";
import developer from "../../assets/images/home/developer-browser.svg";
import innovative from "../../assets/images/home/innovative.svg";
import ValueCards from "./ValueCards";
import Fade from "react-reveal/Fade";

class Section4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word:"developers",
      image:developer,
      color:"#FF8080"
    
    };
  }

  changeView = (name, image, color) => {
      this.setState({word:name, image:image, color:color});
  }




  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="section-container">
        <div className="section-wrapper">
          <div className="section-text we-are-grid">
            <div>
              <h2 style={{color:this.state.color}}
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                data-aos-duration="600"
              >
                We are {this.state.word}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                data-aos-duration="600"
              >
                We focus on designing websites with the highest quality of
                standard. These websites perceed your everyday imagination.
                Therefore its only more than usual that you decide to build a
                website at ASRR. We assrelerate in building wbesites using the
                lastest of the lastest techniques.
              </p>
              <span
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                data-aos-duration="600"
              >
                Learn more ->
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="bottom"
              data-aos-duration="600"
              className="we-are-list"
            >
              <a onClick={() => {this.changeView("developers",developer, "#FF8080")}}>We are developers</a>
              <a onClick={() => {this.changeView("innovative", innovative, "#455878")}}>We are innovative</a>
              <a onClick={() => {this.changeView("management", )}}>We are managment</a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top"
            data-aos-duration="600"
            className="section-image"
          >
            {this.state.word === "developers" ? 
            (
              <Fade><img id={`developer-image`} src={this.state.image} /></Fade>  
            )
          :(this.state.word="innovative" ? (<Fade><img id={`innovative-image`} src={this.state.image} /></Fade>  
          ): null)}
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
