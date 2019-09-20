import React, { Component } from "react";
import AOS from "aos";
// import developer from "../../assets/images/home/developer-browser.svg";
import developer from "../../assets/images/home/developer.gif";
import innovative from "../../assets/images/home/innovative2.svg";
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
      this.forceUpdate();
  }

  activeLink = () => {


  }




  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="section-container">
        <div className="section-keyword"><p style={{color:this.state.color}}>WE ARE</p></div>
        <div className="section-wrapper">
          <div className="section-text we-are-grid">
            <div>
              <div  data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                data-aos-duration="600" style={{marginBottom:"30px"}}>
               
                <span style={{display:"inline"}}><h2 style={{color:"black", display:"inline"}}>We are&nbsp;</h2></span> 
               
               <h2 style={{color:this.state.color, display:"inline"}}
                class={"section-title-animation"}
                key={this.state.word + "title"}>
                
                {this.state.word}

                </h2>
              

              </div>
             
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
              <span className="learn-more-arrow"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                data-aos-duration="600"
              >
                See all our services
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
           <img id={`${this.state.word}-image`} key={this.state.word} src={this.state.image} /> 
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
