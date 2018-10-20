import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from "react-multi-lang";

class BusinessCases extends Component {
    render() {
        return (
	        <div className="background-white center-header">
                <Fade bottom>
	                <h1>{this.props.t("portfolio.businessCases.headline")}</h1>
	                <div className="row-container double business-cases">
                        <div>
	                        <h2>{this.props.t("portfolio.businessCases.form.name")}</h2>
	                        <h3>{this.props.t("portfolio.businessCases.features")}</h3>
	                        <ul>
		                        <li>{this.props.t("portfolio.businessCases.form.features.1")}</li>
		                        <li>{this.props.t("portfolio.businessCases.form.features.2")}</li>
		                        <li>{this.props.t("portfolio.businessCases.form.features.3")}</li>
	                        </ul>
                        </div>
		                <div>
			                <p>
				                {this.props.t("portfolio.businessCases.form.description.1")}
			                </p>
			                <br/>
			                <p>
				                {this.props.t("portfolio.businessCases.form.description.2")}
			                </p>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default translate(BusinessCases);
