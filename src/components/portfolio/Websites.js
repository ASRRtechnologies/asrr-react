import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from "react-multi-lang";

class Websites extends Component {
	render() {
		let divStyle = {
			backgroundImage: 'url(' + this.props.background + ')',
		};
		return (
			<div className="websites white">

				<div className="web-header">
					<h1>{this.props.t(this.props.section)}</h1>
				</div>

				<Fade bottom>
					<div className="background-wrapper parallax" style={divStyle}>
						<div className="portfolio-container">
							<Fade bottom>
								{this.props.items.map((item, index) => {
									return <div key={index} className="drop-shadow">
										<a href={"http://" + item.url}>
											<img src={item.image}
											     alt="Website"/>
											<h2>{item.name}</h2>
										</a>
									</div>
								})}
							</Fade>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}

export default translate(Websites);
