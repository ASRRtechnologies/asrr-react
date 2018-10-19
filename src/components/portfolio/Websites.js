import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from "react-multi-lang";

class Websites extends Component {
	render() {
		let divStyle = {
			backgroundImage: 'url(' + this.props.background + ')',
		};
		return (
			<div className="websites" style={divStyle}>

				<div className="web-header">
					<h1>{this.props.t(this.props.section)}</h1>
				</div>

				<Fade bottom>
					<div className="background-wrapper">
						<div className="portfolio-container">
							<Fade bottom>
								{this.props.items.map((item, index) => {
									return <div key={index} className="drop-shadow">
										<a href={"http://" + item.url}>
											<img src={"http://qs.jin.fi/?url=http://" + item.url}
											     alt="Website Kroontje"/>
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
