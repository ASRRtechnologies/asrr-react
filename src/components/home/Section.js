import React, { Component } from "react";
import NWO from "../../assets/images/home/laptop-nwo.png";
import AOS from 'aos';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
	    AOS.init()
	}


  render() {

    return (
      <div className="section-container">
        <div  className="section-text">
          <h2 data-aos="fade-right" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="top"
							 data-aos-duration="600">Remote desktop server</h2>
        
        
          <p data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="top"
							 data-aos-duration="600">
            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
            zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
            bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
            zethaak met letters nam en ze door elkaar husselde om een
            font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd
            maar is ook, vrijwel onveranderd, overgenomen in elektronische
            letterzetting. Het is in de jaren '60 populair geworden met de{" "}
          </p>
          <span data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="top"
							 data-aos-duration="600">See all projects</span>
          
          <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="top"
							 data-aos-duration="600" class="section-button">
            <p>Read more</p>
          </div>
          
        </div>

        <div  data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="top"
							 data-aos-duration="600" className="section-image">
          <img id="nwo-laptop-image" src={NWO} />

          {/* <div id="nwo-laptop-image-wrapper"> 
                    </div> */}
        </div>
      </div>
    );
  }
}

export default Section;
