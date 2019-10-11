import React, {Component} from "react";
import AOS from 'aos';
import {portfolioImages} from '../shared/PortfolioImages'
import NavLink from "react-router-dom/NavLink";

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
            <div id="home-page-work" className="section-container white-gray mobile-no-gradient">
                <div className="services-wrapper" style={{backgroundImage:`${this.props.backgroundColor}`, color:`${this.props.color}`}}>
                    <h1>{this.props.sectionTitle}</h1>
                    <p>{[this.props.sectionText]}</p>
                </div>
                <div className="section-wrapper rtl">
                    <div className="section-cover-text ">
                            <div className="section-text">
                                <h1 className="section-client-big" data-aos="fade-right" data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top"
                                    data-aos-duration="600">{this.props.client}</h1>
                                <h2 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
                                    data-aos-anchor-placement="top"
                                    data-aos-duration="600">{this.props.title}</h2>
                                <p data-aos="fade-right" data-aos-delay="600" data-aos-easing="ease-in-out"
                                   data-aos-anchor-placement="top"
                                   data-aos-duration="600">
                                    {this.props.text}
                                </p>
                                <NavLink exact to={'/work'}>
                                    <span data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out"
                                          data-aos-anchor-placement="top"
                                          data-aos-duration="600" className="learn-more-arrow"><p>See all our projects</p></span>
                                </NavLink>

                                <NavLink to={this.props.to}> <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
                                                              data-aos-anchor-placement="top"
                                                              data-aos-duration="600" className="section-button">
                                    <p>Read more</p>
                                </div></NavLink>
                            </div>
                    </div>
                    <div className="section-image">
                        <div className="section-image-wrapper flex-end">
                            <img data-aos="fade-up" data-aos-easing="ease-in-out"
                                 data-aos-anchor-placement="top"
                                 data-aos-duration="600" data-aos-delay="400" src={portfolioImages.NWO.landing}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
