import React, { Component } from 'react'
import Quote from '../../assets/images/icons/quote2.svg'
import Avatar from '../../assets/images/clients/avatar.png'

class TestimonialCard extends Component {
	render () {
		return (
			<div className="testimonial-card-wrapper">
				<img src={Quote} width="40px" alt="testimonials"/>
				<p>
					Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de
					standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak
					met letters nam en ze door elkaar husselde om een font-catalogus te maken.
				</p>
				<div className="testimonial-card-credentials">
					<div className="testimonial-card-avatar" style={{backgroundImage:`url(${Avatar})`}}>
					</div>
					<div className="testimonial-card-name">
						<h3>John Doe</h3>
						<p>John Doe Inc</p>
					</div>
				</div>


			</div>
		)
	}
}

export default TestimonialCard
