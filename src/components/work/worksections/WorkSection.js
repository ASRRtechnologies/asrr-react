import React, {Component} from 'react'
import AOS from 'aos'
import landing from '../../../assets/images/work/hes/hes-mobile.png'
import video from '../../../assets/images/work/hes/iphone.mp4';
import Browser from '../../../assets/images/work/hes/hes-mobile.png'
import Carousel, {Dots} from '@brainhubeu/react-carousel'
import {translate} from 'react-multi-lang'

// import ArrowCarousel from '../../ArrowCarousel'


class WorkSection extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        AOS.init()
    }

    render() {

        const {t} = this.props;
        return (
            <div className="work-section-container beautiful-grey">
                <div className="work-section-padding">
                    <div className="work-section-landing">
                        <div className="work-section-title">
                            <h1 data-aos="fade-right" data-aos-easing="ease-in-out"
                                data-aos-anchor-placement="top"
                                data-aos-duration="600">{t(`work.portfolio.${this.props.name}.section.title`)}</h1>
                            <p data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-out"
                               data-aos-anchor-placement="top"
                               data-aos-duration="600">{t(`work.portfolio.${this.props.name}.section.subtitle`)}</p>
                        </div>
                        <img data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
                             data-aos-anchor-placement="top"
                             data-aos-duration="600" src={landing}/>
                        {/*<video controls autoPlay>*/}
                        {/*    <source src={video} type="video/mp4"/>*/}
                        {/*</video>*/}
                    </div>
                    <div className="work-section-wrapper">
                        <h1>Enterprise text</h1>
                        <p data-aos-duration="600">{t(`work.portfolio.${this.props.name}.section.text_1`)}</p>

                        <Carousel infinite arrows>
                            <img className="work-section-carousel-image" src={landing}/>
                            <img className="work-section-carousel-image" src={landing}/>
                            <img className="work-section-carousel-image" src={landing}/>
                        </Carousel>

                    </div>
                </div>
            </div>
        )
    }
}

export default translate(WorkSection);
