import React, {Component} from "react";
import laptop from "../../images/services/laptop.svg";
import router from "../../images/services/router.svg";
import desktop from "../../images/services/computer.svg";
import {translate} from "react-multi-lang"
import {Link} from "react-router-dom";

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
					items : {}
				},
				{
					name: 'hardware',
					items: {}
				},
				{
					name: 'workers',
					items: {}
				}
			]
		};
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
						{choiceTree.services.map((o) => <div>
							<h2>{this.props.t('services.choice-helper.service.' + o.name + '.title')}</h2>
							<div>{this.props.t('services.choice-helper.service.' + o.name + '.text')}</div>
						</div>)}
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
