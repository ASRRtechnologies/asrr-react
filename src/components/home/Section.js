import React, {Component} from "react";
import NWO from "../../assets/images/home/laptop-nwo.png";
import AOS from 'aos';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        AOS.init()
    }


    render() {

        return (
            <div className="section-container">
                <div className="section-keyword"><p>OUR WORK</p></div>
                <div className="section-wrapper">
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
                                     data-aos-duration="600" class="section-button">
                                    <p>Read more</p>
                                </div>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out"
                                 data-aos-anchor-placement="top"
                                 data-aos-duration="600" className="section-image">
                                <img id="nwo-laptop-image" src={NWO}/>
                            </div>
                </div>
            </div>
        );
    }
}

export default Section;
