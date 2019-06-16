import * as React from "react";
import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";

class Header3 extends React.Component {
	render () {
		return (
			<div className="navigation-container">
				{/*<div className="navigation-wrapper">*/}
					{/*<ul className="navigation-links" style=>*/}
						{/*<div className="navigation-list">*/}
							{/*<li><Link to="/"><p>Home</p></Link></li>*/}
							{/*<li><Link to="/dashboard/1"><p>Dashboard</p></Link></li>*/}
							{/*<li><Link to="/choice-generator"><p>Choice Generator</p></Link></li>*/}
							{/*<li><Link to="/instructions"><p>Instructions</p></Link></li>*/}
							{/*<li><Link to="/livingstone-demo"><p>Livingstone Demo</p></Link></li>*/}
							{/*<li><Link to="/login"><p>Login</p></Link></li>*/}
						{/*</div>*/}
					{/*</ul>*/}
				{/*</div>*/}
			</div>
		)
	}
}

export default Header3
