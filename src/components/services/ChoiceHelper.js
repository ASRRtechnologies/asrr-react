import React, {Component} from "react";
import {translate} from "react-multi-lang"
import {Link} from "react-router-dom";
import { FiServer, FiCode, FiSmile } from "react-icons/fi"

class ChoiceHelper extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			service: 'software'
		}
	}




	render() {
		const choiceTree = {
			services: [
				{
					name: 'software',
					icon: FiCode,
					items : {}
				},
				{
					name: 'hardware',
					icon: FiServer,
					items: {}
				},
				{
					name: 'workers',
					icon: FiSmile,
					items: {}
				}
			]
		};

		let self = this;

		return (
			<div className="services-wrapper">
                <div>
                    <h1 style={{maxWidth: "90%", margin: "auto"}}>{this.props.t('services.choice-helper.title')}</h1>
                    <p style={{
                        width: "700px",
                        margin: "auto",
                        maxWidth: "90%"
                    }}>{this.props.t('services.choice-helper.subtitle')}</p>
                </div>
				<hr/>
				<div>
                    <h2>{this.props.t('services.choice-helper.service.header')}</h2>

					<div className="flex-container">
						{choiceTree.services.map(function(o){
							const Icon = o.icon;
							return <div>
								<Icon/>
								<h2>{self.props.t('services.choice-helper.service.' + o.name + '.title')}</h2>
								<div>{self.props.t('services.choice-helper.service.' + o.name + '.text')}</div>
							</div>
						})}


					</div>

					<div className="centerButton-wrapper">
						<Link to="/Services"
						      className="rounded centerButton">{this.props.t('buttons.service')}</Link>
					</div>
				</div>
                <br/>
			</div>
		);
	}
}

export default translate(ChoiceHelper);
