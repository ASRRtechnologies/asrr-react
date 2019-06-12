import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';
import ReadMoreReact from "read-more-react";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class ServiceGrid extends Component {
	render() {
		return (
			<div className="service-grid-container white">
				<div className="service-grid-items-container">
					<Fade bottom>
						{this.props.items.map((item, index) => {
							return <div key={index} className="drop-shadow">
								<img src={item.image} className="service-image" alt={item.service + " image"}/>
								<h2>{this.props.t('services.' + item.service + ".name")}</h2>
								<div className="card-description">
									<div><ReadMoreReact
										text={this.props.t('services.' + item.service + ".description")}
										min={30} ideal={32} max={35}/></div>
								</div>
							</div>
						})}
					</Fade>
				</div>
			</div>
		);
	}
}

export default translate(ServiceGrid);
