import React, { Component } from 'react'
import Wrench from '../../assets/images/services/icons/icon.png'

class ServiceCard extends Component {
	render () {
		const { image, service, textPreview, color } = this.props
		return (
			<div className="services-card" style={{backgroundColor:color}}>
				<div className="services-card-image">
					<img src={image} className="services-card-icon"/>
				</div>
				<div className="services-card-content">
					<h2 className="services-card-title">{service}</h2>
					<div className="services-card-content-hidden">
						<p className="services-card-content-text">{textPreview}</p>

						<p className="services-card-read-more">Read more</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ServiceCard