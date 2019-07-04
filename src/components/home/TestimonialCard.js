import React, { Component } from 'react'
import Quote from "../../assets/images/icons/quote.svg";
class TestimonialCard extends Component {
	render () {
		return (
			<div className="testimonial-card-wrapper">
				<img src={Quote} width="50px"/>

			</div>
		)
	}
}

export default TestimonialCard