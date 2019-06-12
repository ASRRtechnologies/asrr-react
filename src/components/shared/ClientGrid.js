import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import kroontje from "../../images/clients/kroontje.svg";
import form from "../../images/clients/form_logo-diap.svg";
import m4v from "../../images/clients/m4v.png";

class ClientGrid extends Component {
	render() {
		return (
			<div className="centerWrapper600px white">
				<div className="clientGrid">
	                <h2>{this.props.t(this.props.headline)}</h2>
                    {/*eslint-disable-next-line*/}
                    <a><img src={kroontje} alt="Logo Kroontje"/></a>
                    <a href="https://form.nl"><img src={form} alt="Logo Form"/></a>
                    {/*eslint-disable-next-line*/}
	                <a><img src={m4v} className="m4v" alt="Logo Moves 4 Vitality"/></a>
                </div>
            </div>
		);
	}
}

export default translate(ClientGrid);
