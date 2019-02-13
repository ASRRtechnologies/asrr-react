import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import ServiceSummary from "../home/ServiceSummary";
import Clients from "../home/Clients";
import lowPolyRed from "../../images/backgrounds/lowpoly.jpg";
import browser from '../../images/sectionimages/laptop.svg';
import Particles from "react-particles-js";

const button =
	{
		text: "buttons.home",
		href: "/team",
		fa: ["fas", "users"]
	};

class Home extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<div className="landing-canvas">
						<Particles
							style={{position: "absolute"}}
							height="400px"
							params={{
								"fps_limit": 28,
								"type": 'inside',
								"particles": {
									"number": {
										"value": 200,
										"density": {
											"enable": false
										}
									},
									"line_linked": {
										"enable": true,
										"distance": 50,
										"opacity": 0.5
									},
									"move": {
										"speed": 1
									},
									"opacity": {
										"anim": {
											"enable": true,
											"opacity_min": 0.05,
											"speed": 2,
											"sync": false
										},
										"value": 0.4
									}
								},
								"polygon": {
									"enable": true,
									"scale": 2,
									"type": "inline",
									"move": {
										"radius": 2
									},
									"url": "/assr-landing-path.svg",
									"inline": {
										"arrangement": "equidistant"
									},
									"draw": {
										"enable": false,
										"stroke": {
											"color": "rgba(255, 255, 255, .2)"
										}
									}
								},
								"retina_detect": true,
								"interactivity": {
									"events": {
										"onhover": {
											"enable": true,
											"mode": "bubble"
										},
									},
									"modes": {
										"bubble": {
											"size": 6,
											"distance": 40
										}
									}
								}
							}}/>
						<Particles
							params={{
								"particles": {
									"number": {
										"value": 60,
										"density": {
											"enable": true,
											"value_area": 1000
										}
									},
									"line_linked": {
										"enable": true,
										"opacity": 0.02
									},
									"move": {
										"direction": "right",
										"speed": 0.05
									},
									"size": {
										"value": 1
									},
									"opacity": {
										"anim": {
											"enable": true,
											"speed": 1,
											"opacity_min": 0.05
										}
									}
								},
								"interactivity": {
									"detect_on": "window",
									"events": {
										"onclick": {
											"enable": true,
											"mode": "push"
										},
										"onhover": {
											"enable": true,
											"mode": "grab"
										},
									},
									"modes": {
										"push": {
											"particles_nb": 1
										},
									}
								},
								"retina_detect": true
							}}/>
					</div>

					<Landing header="home.headline" subtitle="home.subtitle" background={lowPolyRed} image={browser}
					         color={true}
					         button={button}/>
				</Fade>
				<Fade bottom>
					<Clients/>
				</Fade>

				<Fade bottom>
					<ServiceSummary/>
				</Fade>

				{/*TODO: business case*/}

				<Fade bottom>
					{/*<SimpleSlider/>*/}
				</Fade>

				<Fade bottom>
					{/*<Languages/>*/}
				</Fade>
			</div>
		);
	}
}

export default Home;