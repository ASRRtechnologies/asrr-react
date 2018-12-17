import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';
import ReadMoreReact from "read-more-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class ContactMethods extends Component {
	render() {
		return (
			<div className="grid-container white">
				<Fade bottom>
					<div className="item-container">
						<div className="item-cards">
							<Fade bottom>
								{this.props.items.map((item, index) => {
									return <div key={index} className="drop-shadow">
										<img src={item.image} className="service-image" alt={item.service + " image"}/>
										<h2>{this.props.t('contact.' + item.service + ".name")}</h2>
										<div className="card-description">
											<div><ReadMoreReact
												text={this.props.t('contact.' + item.service + ".description")}
												min={30} ideal={32} max={35}/>
											</div>

											{item.buttons.map((obj, index2) => {
												return <div><a href={obj.href}
												               className="rounded centerButton grey"><FontAwesomeIcon
													icon={obj.fa}/> {obj.text}
												</a></div>
											})}
										</div>
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

export default translate(ContactMethods);
