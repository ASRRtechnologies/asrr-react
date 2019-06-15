import * as React from "react";
import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";

class Header2 extends React.PureComponent {

	constructor(props) {
		super(props);
		this.header = React.createRef();
		this.sideNav = React.createRef();

		this.state = {
			menuOpen: false,
			header: ""
		}
	}

	sticky = () => {
		let sticky = this.header.current.getBoundingClientRect().top;
		if (window.pageYOffset > sticky) {
			if (this.state.header !== 'sticky') {
				this.setState({header: 'sticky'})
			}
		} else {
			this.setState({header: ''})
		}
	};

	componentDidMount() {
		// Closes header on click of all elements which are not the header or side-nav
		document.addEventListener("click", this.detectClick);
		window.addEventListener('scroll', this.sticky, false);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.detectClick);
		window.removeEventListener('scroll', this.sticky, false);
	}

	menuOpen = () => {
		this.setState({menuOpen: !this.state.menuOpen});
	};

	closeMenu = () => {
		this.setState({menuOpen: false})
	};

	render() {
		return (
			//This container is needed to create two child elements of this div to place the side menu under the header
			<div className={`header-container ${this.state.header}`}>
				<div ref={this.header} id="header" className={`header-wrapper`}>
					<div className="logo-wrapper">
						<img id="logo" alt="Form" src={logo}/>
					</div>

					<div className="navigation-wrapper">
						<ul id="pc-navigation">
							<li><Link to="/"><p>Home</p></Link></li>
							<li><Link to="/dashboard/1"><p>Dashboard</p></Link></li>
							<li><Link to="/choice-generator"><p>Choice Generator</p></Link></li>
							<li><Link to="/instructions"><p>Instructions</p></Link></li>
							<li><Link to="/livingstone-demo"><p>Livingstone Demo</p></Link></li>
							<li><Link to="/login"><p>Login</p></Link></li>
						</ul>
						<ul id="mobile-navigation" className="hamburger-wrapper">
							{/*<span onClick={this.menuOpen}*/}
								  {/*className={this.state.menuOpen ? "hamburger--spring is-active" : "hamburger--spring"}>*/}
								  {/*<span className="hamburger-box">*/}
									{/*<div className="hamburger-inner"/>*/}
								  {/*</span>*/}
							{/*</span>*/}
							<div className="hamburger-line line1"></div>
							<div className="hamburger-line line2"></div>
						</ul>
					</div>
				</div>
				<div id="side-menu" ref={this.sideNav} className="side-menu"
					 style={{width: this.state.menuOpen ? '100%' : 0}}>
					<ul style={{opacity: this.state.menuOpen ? 1 : 0}}>
						<Fade duration={1500} right cascade when={this.state.menuOpen}>
							<li><Link to="/"><p onClick={this.closeMenu}>Home</p></Link></li>
							<li><Link to="/dashboard/1"><p onClick={this.closeMenu}>Dashboard</p></Link></li>
							<li><Link to="/choice-generator"><p onClick={this.closeMenu}>Choice Generator</p></Link>
							</li>
							<li><Link to="/instructions"><p onClick={this.closeMenu}>Instructions</p></Link></li>
							<li><Link to="/livingstone-demo"><p onClick={this.closeMenu}>Livingstone Demo</p></Link>
							</li>
							<li><Link to="/login"><p onClick={this.closeMenu}>Login</p></Link></li>
						</Fade>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header2

