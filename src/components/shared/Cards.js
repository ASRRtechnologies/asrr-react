import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';
import ReadMoreReact from "read-more-react";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class Cards extends Component {
	render() {
		return (
			<div className="grid-container">
				<Fade bottom>
					<div className="item-container">
						<div className="item-cards white">
							<Fade bottom>
								{this.props.items.map((item, index) => {
									return <div key={index} className="drop-shadow">
										<h2>{this.props.t(this.props.category + '.' + item.service + ".name")}</h2>
										<div className="card-description">
                                            <div><ReadMoreReact
                                                text={this.props.t(this.props.category + '.' + item.service + ".description")}/>
                                            </div>
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

export default translate(Cards);
