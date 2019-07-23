import React, { Component } from 'react'
import AOS from 'aos'
import landingImage from '../../assets/images/work/hes/hes_phone.png'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import Image from '../../assets/images/work/form/building.jpg'
import Browser from '../../assets/images/work/hes/hes_browser.png';
import ArrowCarousel from './ArrowCarousel'
import ImageFont from '../shared/fonts/ImageFont'

class WorkPage extends Component {
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
			<div className="work-page-wrapper">
				<div style={{backgroundImage:this.props.background ? `url(${this.props.backgroundImage})` : null}} className="work-page-section center-text gradient" >

					<div data-aos="fade-up" data-aos-anchor-placement="top">
						<div className="work-page-image-wrapper">
							<img className="work-page-image big-image" src={landingImage}/>
						</div>
					</div>

					<div className="work-page-text-wrapper center-text">
						<div data-aos="fade" data-aos-anchor-placement="top" data-aos-delay="300">
							{/*<h1 className=" center-text big-font">Mobile mockup with style</h1>*/}
							<ImageFont title="Mobile mockup with style" image={Image}/>

						</div>
					</div>


				</div>

				<div style={{ backgroundColor: 'white' }} className="work-page-section grid spacing-100">
					<div className="work-page-text-wrapper">
						<div data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="bottom"
							 data-aos-duration="600">
							<h1 className="slide-left medium-font"> A dedicted server using linux counterparts</h1>
						</div>

						<div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="bottom"
							 data-aos-duration="500">
							<div className="work-page-text">
								<p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem
									Ipsum
									is de
									standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende
									drukker
									een
									zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
									Het
									heeft
									niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
									elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met
									de
									textductie van
									Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
									software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
								</p>
							</div>
						</div>
					</div>

					<Carousel
						arrowLeft={<ArrowCarousel/>}
						arrowRight={<ArrowCarousel right/>}
						addArrowClickHandler
						infinite
						slidesPerPage={1}
						slidesPerScroll={1}
					>
						<div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="bottom"
							 data-aos-duration="600" className="work-page-image-wrapper">
							<img className="work-page-image right-image" src={landingImage}/>
						</div>
					</Carousel>
					<div></div>
					<Dots number={3}/>
				</div>

				<div style={{ backgroundColor: '#f2f5fa' }} className="work-page-section grid spacing-100">

					<div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out"
						 data-aos-anchor-placement="bottom"
						 data-aos-duration="600" className="work-page-image-wrapper">
						<img className="work-page-image right-image wide-image" src={Browser}/>
					</div>

					<div className="work-page-text-wrapper">
						<div data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="bottom"
							 data-aos-duration="600">
							<h1 className="slide-left medium-font"> A dedicted server using linux counterparts</h1>
						</div>

						<div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out"
							 data-aos-anchor-placement="bottom"
							 data-aos-duration="500">
							<div className="work-page-text">
								<p> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem
									Ipsum
									is de
									standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende
									drukker
									een
									zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
									Het
									heeft
									niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in
									elektronische letterzetting. <br/> <br/>Het is in de jaren '60 populair geworden met
									de
									textductie van
									Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing
									software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
								</p>
							</div>
						</div>
					</div>


				</div>


			</div>
		)
	}
}

export default WorkPage
