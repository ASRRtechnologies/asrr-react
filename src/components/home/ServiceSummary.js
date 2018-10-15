import React, {Component} from "react";
import laptop from "../../images/services/laptop.svg";
import router from "../../images/services/router.svg";
import computer from "../../images/services/computer.svg";
import phone from "../../images/services/phone.svg";
import {translate} from "react-multi-lang"
import Cards from "../Cards";

const why = [
	{
		logo: "",
		service: "multi",
	},
	{
		logo: "",
		service: "transparency",
	},
	{
		service: "integrations"
	},
];


class ServiceSummary extends Component {
	render() {
		return (
			<div className="services-wrapper">
				<div>
					<h1> What we do</h1>

					<div className="flex-container">
						<div>
							<img src={laptop} alt="webdesign"/>
							<h2>{this.props.t('home.services.web.name')}</h2>
							<p>{this.props.t('home.services.web.description')}</p>
						</div>
						<div>
							<img src={phone} alt="app development"/>
							<h2>{this.props.t('home.services.app.name')}</h2>
							<p>{this.props.t('home.services.app.description')}</p>

						</div>
						<div>
							<img src={router} alt="back-ends"/>
							<h2>{this.props.t('home.services.backend.name')}</h2>
							<p>{this.props.t('home.services.backend.description')}</p>

						</div>
						<div>
							<img src={computer} alt="desktop"/>
							<h2>{this.props.t('home.services.desktop.name')}</h2>
							<p>{this.props.t('home.services.desktop.description')}</p>

						</div>
					</div>
				</div>

				<hr/>

				<div>
					<h1>Why ASRR?</h1>
					<p>Why choose ASRR instead of a conventional freelancer (ZZP) or an internal IT employee?</p>
					<Cards category="home.why" items={why}/>
				</div>

			</div>
		);
	}
}

export default translate(ServiceSummary);
