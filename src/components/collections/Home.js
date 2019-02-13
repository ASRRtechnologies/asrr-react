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
					<Particles
						params={{
							"fps_limit": 28,
							"particles": {
								"number": {
									"value": 200,
									"density": {
										"enable": false
									}
								},
								"line_linked": {
									"enable": true,
									"distance": 30,
									"opacity": 0.4
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
								"scale": 0.5,
								"type": "inline",
								"move": {
									"radius": 10
								},
								"url": "/small-deer.2a0425af.svg",
								"inline": {
									"arrangement": "equidistant"
								},
								"draw": {
									"enable": true,
									"stroke": {
										"color": "rgba(255, 255, 255, .2)"
									}
								}
							},
							"retina_detect": false,
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
									"value": 380,
									"density": {
										"enable": false
									}
								},
								"size": {
									"value": 3,
									"random": true,
									"anim": {
										"speed": 4,
										"size_min": 0.3
									}
								},
								"line_linked": {
									"enable": false
								},
								"move": {
									"random": true,
									"speed": 1,
									"direction": "top",
									"out_mode": "out"
								}
							},
							"interactivity": {
								"events": {
									"onhover": {
										"enable": false,
										"mode": "bubble"
									},
									"onclick": {
										"enable": true,
										"mode": "repulse"
									}
								},
								"modes": {
									"bubble": {
										"distance": 250,
										"duration": 2,
										"size": 0,
										"opacity": 0
									},
									"repulse": {
										"distance": 400,
										"duration": 4
									}
								}
							}
						}}/>

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