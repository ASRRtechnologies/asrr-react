import React, {Component} from "react";
// import phone from "../../assets/images/home/remote.jpg";
import laptop from "../../assets/images/home/nwo-laptop-login.png";
import AOS from 'aos';
import {withScroll} from "../shared/withScroll";
import NavLink from "react-router-dom/NavLink";

class Section2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.elementTop = React.createRef();
    }

    componentDidMount() {
        AOS.init();
    }


    render() {

        return (
            <div className="section-container white-gray">
                <div className="section-wrapper flex">
                    <div className="section-image">
                        <div className="section-image-wrapper">
                            <img src={laptop}/>
                        </div>
                    </div>
                    <div className="section-cover-text flex-end">
                        <div className="section-text">
                            <h1 data-aos="fade-right" data-aos-easing="ease-in-out"
                                data-aos-anchor-placement="top"
                                data-aos-duration="600">Remote desktop server</h1>
                            <p data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
                               data-aos-anchor-placement="top"
                               data-aos-duration="600">
                                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                                zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                                bedrijfstak sinds de 16e eeuw
                            </p>
                            <NavLink exact to={'/work'}>
                                    <span data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out"
                                          data-aos-anchor-placement="top"
                                          data-aos-duration="600" className="learn-more-arrow"><p>See all our projects</p></span>
                            </NavLink>

                           <NavLink to="/work/nwo"> <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
                                 data-aos-anchor-placement="top"
                                 data-aos-duration="600" className="section-button">
                                <p>Read more</p>
                           </div></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Section2;
