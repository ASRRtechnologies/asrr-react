import React, { Component } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import imageOne from '../../assets/images/work/hes/hes.png'
import imageTwo from '../../assets/images/work/hes/hes-overlay.png'
import imageThree from '../../assets/images/work/hes/HES-logo-dark.png'
import background from "../../assets/images/backgrounds/testimonial2.svg"
import TestimonialCard from './TestimonialCard'
class Testimonial extends Component {
	render () {
		return (
			<div className="testimonial-wrapper">
				<div className="testimonial-header">
						<h1>Testimonials</h1>
						<span> </span>
						<p>Dont just take our words for it see what
						<br/> other clients have to say about us</p>
				</div>


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
				<img className="testimonial-background" src ={background}/>
			</div>
		)
	}
}

export default Testimonial
