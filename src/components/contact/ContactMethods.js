import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class ContactMethods extends Component {
	render() {
		return (
			<div className="grid-container white">
				<Fade bottom>
                    <h1>Contact us</h1>
					<div className="item-container">
						<div className="item-cards">
							<Fade bottom>
								{this.props.items.map((item, index) => {
									return <div key={index} className="drop-shadow">
										<img src={item.image} className="service-image" alt={item.service + " image"}/>
										<h2 style={{margin: 0}}>{this.props.t('contact.' + item.service + ".name")}</h2>
										<div className="card-description">
											<div>{this.props.t('contact.' + item.service + ".description")}</div>
											{item.buttons.map((obj, index2) => {
												return <div style={{
													padding: "1em 0 1em 0",
													margin: "auto",
													display: "inline-block"
												}} key={index2}><a href={obj.href}
												                   className="rounded centerButton grey">
													<FontAwesomeIcon icon={obj.fa}/>
													{" " + obj.text}
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
