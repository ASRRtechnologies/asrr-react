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
      <div className="section-container">
        <div className="section-wrapper">



          <div><h2>Testingg</h2>
            <p> zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
              bedrijfstak sinds de 16e eeuw</p>

          </div>
          <div className="section-services-grid">
            <ValueCards/>
            <ValueCards/>
            <ValueCards/>
            <ValueCards/>
            <ValueCards/>
            <ValueCards/>
          </div>

          
        </div>
      </div>
    );
  }
}

export default Section3;
