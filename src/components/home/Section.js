import React, {Component} from "react";
import phone from "../../assets/images/home/hes-mobile.png";
import AOS from 'aos';
import {getScrollPosition} from "../shared/Functions";
import laptop from "../../assets/images/home/nwo-laptop-login.png";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{elementPos:"", name:""}
        };
    }

    componentDidMount() {
        AOS.init();
        const props = this.props;
        // window.addEventListener("scroll", function _scrollHandler (){
        //     getScrollPosition("work", props)
        // },false)
    }

    // componentWillUnmount() {
    //     const props = this.props;
    //     window.removeEventListener("scroll", function _scrollHandler(){
    //         getScrollPosition("work", props)
    //     },false)
    // }

    render() {

        return (
            <div id="work" className="section-container white-gray mobile-no-gradient">
                <div className="services-wrapper" style={{backgroundImage:`${this.props.backgroundColor}`, color:`${this.props.color}`}}>
                    <h1>{this.props.title}</h1>
                    <p>{[this.props.text]}</p>
                </div>
                <div className="section-wrapper rtl">
                    <div className="section-cover-text ">
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
                                <span data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out"
                                      data-aos-anchor-placement="top"
                                      data-aos-duration="600" className="learn-more-arrow"><p>See all our projects</p></span>

                                <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
                                     data-aos-anchor-placement="top"
                                     data-aos-duration="600" className="section-button">
                                    <p>Read more</p>
                                </div>
                            </div>
                    </div>
                    <div className="section-image">
                        <div className="section-image-wrapper flex-end">
                            <img src={phone}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
