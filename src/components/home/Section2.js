import React, { Component } from 'react'
import AOS from 'aos'
import NavLink from 'react-router-dom/NavLink'
import {portfolioImages} from '../shared/PortfolioImages'

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
                            <img data-aos="fade-up" data-aos-easing="ease-in-out"
                                 data-aos-anchor-placement="top"
                                 data-aos-duration="600" data-aos-delay="400" src={portfolioImages.Hes.landing}/>
                        </div>
                    </div>
                    <div className="section-cover-text">
                        <div className="section-text">
                            <h1  data-aos="fade-right" data-aos-easing="ease-in-out"
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
