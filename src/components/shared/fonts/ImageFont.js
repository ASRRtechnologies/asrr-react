import React, { Component } from 'react'

class ImageFont extends Component {
	render () {

		const {image, title} = this.props;
		return (
			<div className="image-font-wrapper">
				<h1 style={{backgroundImage:`url(${image})`}}>{title}</h1>
			</div>
		)
	}
}

export default ImageFont