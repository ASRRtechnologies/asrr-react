import React, { Component } from "react";
import AOS from "aos";
import phone from "../../assets/images/home/hes_phone.png";
import NWO from "../../assets/images/home/laptop-nwo.png";
import ValueCards from "./ValueCards";

class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="section-container beautiful-purple">
        <div className="section-wrapper value-cards">
          <div
            data-aos="pop"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top"
            data-aos-duration="600"
          >
            <ValueCards />
          </div>

          <div
            data-aos="pop"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top"
            data-aos-duration="600"
          >
            <ValueCards />
          </div>
          <div
            data-aos="pop"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top"
            data-aos-duration="600"
          >
                 <ValueCards /> 
          </div>

          <div
            data-aos="pop"
            data-aos-delay="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top"
            data-aos-duration="800"
          >
                 <ValueCards /> 
          </div>

          
        </div>
      </div>
    );
  }
}

export default Section3;
