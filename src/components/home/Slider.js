import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {translate} from "react-multi-lang";

var iconStyle = {
	marginLeft: "1em"
};

class SimpleSlider extends Component {
	constructor() {
		super();
		this.state = {
			itemArray: ["faHtml5", "faCss3-Alt", "faJs", "faJava", "faWindows", "faLinux", "faGithub", "faGit", "faReact", "faAndroid", "faApple", "faNode", "faNode-Js", "faPaypal", "faFacebook", "faTwitter", "faAws"]
		};
	}

	render() {
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			dots: false,
			pauseOnHover: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		};
		return (
			<div className="logoslider-wrapper">
				<h2>{this.props.t('home.techslider')}</h2>
				<div className="logoslider-container">
					<Slider {...settings} class="logoslider">
						{this.state.itemArray.map((item, index) => {
							return <div key={index} style={iconStyle}><FontAwesomeIcon size={"5x"}
							                                               icon={["fab", item.toLowerCase().replace('fa', '')]}/>
							</div>
						})}
					</Slider>
				</div>
			</div>
		);
	}
}

export default translate(SimpleSlider);