import React, { Component } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import imageOne from '../../assets/images/work/hes/hes.png'
import imageTwo from '../../assets/images/work/hes/hes-overlay.png'
import imageThree from '../../assets/images/work/hes/HES-logo-dark.png'
import background from '../../assets/images/backgrounds/testimonial2.svg'
import TestimonialCard from './TestimonialCard'
import GeneralHeader from '../shared/GeneralHeader'

class Testimonial extends Component {
	render () {
		return (
			<div className="testimonial-wrapper">

				<GeneralHeader title="Testimonials"
							   subText={`Dont just take us for our words \n see what our clients have to say`}/>
				<Carousel
					infinite
					autoPlay={6000}
					animationSpeed={2000}
					slidesPerPage={3}
					slidesPerScroll={1}
					breakpoints={{
						1600: { // these props will be applied when screen width is less than 1000px
							slidesPerPage: 2,
						},
						700: {
							slidesPerPage: 1,
						},
					}}

				>
					<TestimonialCard/>
					<TestimonialCard/>
					<TestimonialCard/>
					<TestimonialCard/>
					<TestimonialCard/>
				</Carousel>
				<img className="testimonial-background" src={background}/>
			</div>
		)
	}
}

export default Testimonial
