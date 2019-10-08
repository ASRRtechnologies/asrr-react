import React, { Component } from 'react'
import WorkGrid from '../components/work/WorkGrid'
import { translate } from 'react-multi-lang'
import LandingImage from '../components/shared/landing/LandingImage'
import landing from '../assets/images/work/landing.jpg'

class Work extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				<LandingImage pageID="#work" title={'Work'} image={landing}/>
					<WorkGrid/>
			</div>
		);
	}
}

export default translate(Work);
