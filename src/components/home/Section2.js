import React, {Component} from "react";
import AOS from 'aos';
import phone from "../../assets/images/home/hes_phone.png";
import NWO from "../../assets/images/home/laptop-nwo.png";

class Section2 extends Component {
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
            <div className="section-wrapper">

                <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out"
                     data-aos-anchor-placement="middl"
                     data-aos-duration="600" className="section-image">
                    <img id="hes-phone-image" src={phone}/>
                </div>
                <div className="section-text">
                    <h2 data-aos="fade-right" data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top"
                        data-aos-duration="600">Remote desktop server</h2>
                    <p data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
                       data-aos-anchor-placement="top"
                       data-aos-duration="600">
                        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                        zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                        bedrijfstak sinds de 16e eeuw
                    </p>
                    <span data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out"
                          data-aos-anchor-placement="top"
                          data-aos-duration="600">See all projects</span>

                    <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
                         data-aos-anchor-placement="top"
                         data-aos-duration="600" className="section-button">
                        <p>Read more</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Section2;
