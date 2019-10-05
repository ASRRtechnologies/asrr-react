import React, { Component } from 'react'
import AOS from 'aos'
import landing from '../../../assets/images/work/hes/hes-mobile.png'
import Browser from '../../../assets/images/work/hes/hes-mobile.png'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
// import ArrowCarousel from '../../ArrowCarousel'


class WorkSection extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        AOS.init({
            duration: 2000,
        })
    }

    render () {
        AOS.init()

        return (
            <div className="work-section-container">
                <div  className="work-section-landing">
                    <img data-aos="fade-up" data-aos-easing="ease-in-out"
                         data-aos-anchor-placement="top"
                         data-aos-duration="600"  src={landing}/>

                </div>
            </div>
        )
    }
}
export default WorkSection
