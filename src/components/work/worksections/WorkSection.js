import React, { Component } from 'react'
import AOS from 'aos'
import video from '../../../assets/images/work/hes/iphone.mp4'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import { translate } from 'react-multi-lang'

import ArrowCarousel from '../../ArrowCarousel'

class WorkSection extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount () {
		AOS.init()
	}

	render () {

		const { t, landingImage } = this.props
		return (
			<div className="work-section-container beautiful-grey">
				<div className="work-section-padding">
					<div className="work-section-landing">
						<div className="work-section-title">
							<h1 className="client-name-big" data-aos="fade-right" data-aos-easing="ease-in-out"
								data-aos-anchor-placement="top"
								data-aos-duration="600">{t(`work.portfolio.${this.props.name}.client`)}</h1>
							<h1 data-aos="fade-right" data-aos-easing="ease-in-out"
								data-aos-anchor-placement="top"
								data-aos-duration="600" data-aos-delay="300">{t(
								`work.portfolio.${this.props.name}.section.title`)}</h1>
							{/*<p data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-out"*/}
							{/*data-aos-anchor-placement="top"*/}
							{/*data-aos-duration="600">{t(`work.portfolio.${this.props.name}.section.subtitle`)}</p>*/}
						</div>
						{/*<div className="work-section-landing-image-wrapper">*/}
						<img data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="top"
							 data-aos-duration="600" src={this.props.data.landing}/>
						{/*<video controls autoPlay>*/}
						{/*    <source src={video} type="video/mp4"/>*/}
						{/*</video>*/}
						{/*</div>*/}
					</div>
				</div>
				<div style={{backgroundColor:"white"}} className="work-section-padding">
					<div className="work-section-wrapper">
						<div>
							<h1>{t(`work.portfolio.${this.props.name}.section.subtitle_1`)}</h1>
							<p data-aos-duration="600">{t(`work.portfolio.${this.props.name}.section.text_1`)}</p>
						</div>

						<Carousel infinite arrows>
							{this.props.data.images.map((data, i) => {
								return<img className="work-section-carousel-image" src={data.image} alt={data.alt}/>
							})}
						</Carousel>
					</div>
				</div>
				<div style={{backgroundColor:"white"}} className="work-section-padding">
					<div className="work-section-wrapper">

						<Carousel infinite arrows>
							{/*<img className="work-section-carousel-image" src={landing}/>*/}
							{/*<img className="work-section-carousel-image" src={landing}/>*/}
							{/*<img className="work-section-carousel-image" src={landing}/>*/}
						</Carousel>

						<div>
							<h1>{t(`work.portfolio.${this.props.name}.section.subtitle_1`)}</h1>
							<p data-aos-duration="600">{t(`work.portfolio.${this.props.name}.section.text_1`)}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default translate(WorkSection)
