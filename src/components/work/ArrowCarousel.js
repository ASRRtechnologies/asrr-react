import React, { Component } from 'react'


class ArrowCarousel extends Component {
	render () {
		return (
			<div className={this.props.right ? "arrow-wrapper" : "arrow-wrapper arrow-left"}>
				<div className="arrow">
					<div className="arrow-top"></div>
					<div className="arrow-bottom"></div>
				</div>
			</div>
		)
	}
}



export default ArrowCarousel
