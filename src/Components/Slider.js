import React, {Component} from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import kroontje from '../images/clients/kroontje.jpg'

var slide = {
	width: "50px"
};

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			dots: false,
			pauseOnHover: true,
			responsive: [{
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
			<div class="logoslider-wrapper">
				<h2> Technologies we use</h2>
				<Slider {...settings} class="logoslider">
					<div>
						<img style={slide} src={kroontje} alt="kroontje"/>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		);
	}
}