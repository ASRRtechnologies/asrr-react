import React, {Component} from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

var iconStyle = {
	marginLeft: "1em"


};

export default class SimpleSlider extends Component {
	constructor() {
		super();


		// const item = [];
		// item.push(
		// 	<div>
		// 		<FontAwesomeIcon size={"10x"} icon={["fab", iconName]} />
		// 	</div>
		// );

		this.state = {
			itemArray: ["faHtml5", "faCss3", "faJs", "faJava", "faWindows", "faLinux", "faGithub", "faGit", "faReact", "faAndroid", "faApp-Store-Ios", "faApple", "faNode", "faNode-Js", "faPaypal", "faFacebook", "faTwitter", "faSnapchat", "faAws", "faChrome"]
		};


	}


	render() {
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 5,
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
				<h2> Technologies we use <FontAwesomeIcon icon={["fab", "html5"]}/></h2>
				<div class="logoslider-container">
					<Slider {...settings} class="logoslider">
						{this.state.itemArray.map((item) => {
							return <div style={iconStyle}><FontAwesomeIcon size={"5x"}
							                                               icon={["fab", item.toLowerCase().replace('fa', '')]}/>
							</div>
						})}
					</Slider>
				</div>
			</div>
		);
	}
}