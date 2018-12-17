import React, {Component} from "react";
import {translate} from "react-multi-lang"
import Cards from "../Cards";
import InternalButton from "../InternalButton";

const why = [
	{
		service: "multi",
	},
	{
		service: "transparency",
	},
	{
		service: "integrations"
	},
];

const button =
	{
		text: "buttons.services",
		href: "/Services",
		fa: ["fas", "cogs"]
	};

class Why extends Component {
	render() {
		return (
			<div className="services-wrapper">
				<div>
					<div>
						<h1>{this.props.t('home.why.headline')}</h1>
						<p>{this.props.t('home.why.subtitle')}</p>
						<Cards category="home.why" items={why}/>
						<InternalButton button={button}/>

					</div>
				</div>
			</div>
		);
	}
}

export default translate(Why);
