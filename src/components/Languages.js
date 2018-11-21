import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';

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
										<div className="card-description">
											<img src={item.image}/>
											<h2>{item.name}</h2>
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
