import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Language from '../../../utils/Language'
import { getLanguage, translate } from 'react-multi-lang'
import logo from '../../../assets/images/logo.svg'
import logoBlack from '../../../assets/images/logo-black.svg'
import nlFlag from '../../../assets/images/flags/nl.svg'
import enFlag from '../../../assets/images/flags/en.svg'

class Header extends Component {

	constructor (props) {
		super(props)
		this.header = React.createRef()
		this.hamburger = React.createRef()
		this.headerBorder = React.createRef()
		this.state = {
			menuOpen: false,
			header: '',
			prevScrollprops: '',
			logoBlack: true,
		}
	}

	menuOpen = () => {
		this.setState({ menuOpen: !this.state.menuOpen }, () => {
				//Slight delay to Change header color after menu has opened
				setTimeout(this.checkHeaderColor, 300)
			},
		)
	}

	checkHeaderColor = () => {
		if (this.state.menuOpen) {
			this.hamburger.current.style.backgroundColor = 'white'
			this.setState({ logoBlack: false })
		} else {
			this.hamburger.current.style.backgroundColor = 'black'
			this.setState({ logoBlack: true })
		}
	}

	closeMenu = () => {
		this.setState({ menuOpen: false })
	}

	headerScroll = () => {
		this.setState({ prevScrollprops: window.pageYOffset })
		let currentScrollPos = window.pageYOffset
		let documentHeight = window.document.body.clientHeight
		let bottomPage = window.innerHeight + window.pageYOffset
		console.log(window.document.body.getBoundingClientRect().height)
		// this.headerBorder.current.style.width = `27%`
		this.headerBorder.current.style.width = `${(currentScrollPos /
			(documentHeight - (bottomPage - currentScrollPos))) * 100}%`

		if (currentScrollPos < 100) {
			this.header.current.style.backgroundColor = 'transparent'
			this.hamburger.current.style.backgroundColor = 'black'
			this.setState({ logoBlack: true })
		} else {
			// this.header.current.style.opacity = 1;
			this.header.current.style.backgroundColor = '#1a1a1a'
			this.hamburger.current.style.backgroundColor = 'white'
			this.setState({ logoBlack: false })
		}
		this.setState({ prevScrollpos: currentScrollPos })
	}

	static selectPreferredLanguage (language) {
		Language.selectPreferredLanguage(language)
		window.location.reload()
	}

	static handleFlagClick () {
		if (getLanguage().toString() === 'nl') {
			Header.selectPreferredLanguage('en')
		} else if (getLanguage().toString() === 'en') {
			Header.selectPreferredLanguage('nl')
		}
	}

	componentDidMount () {
		document.addEventListener('scroll', this.headerScroll)

		if (getLanguage().toString() === 'nl') {
			this.setState({ languageImage: nlFlag })
		} else if (getLanguage().toString() === 'en') {
			this.setState({ languageImage: enFlag })
		}
	};

	componentWillUnmount () {
		document.removeEventListener('scroll', this.headerScroll)
	}

	render () {
		const src = this.state.languageImage

		return (
			<div ref={this.header} className="navigation-container">
				<div ref={this.headerBorder} className="navigation-border"></div>
				<div className="navigation-wrapper">

					<div onClick={this.closeMenu} className="logo-wrapper"><NavLink to="/"><img className="logo"
																								src={this.state.logoBlack
																									? logoBlack
																									: logo}
																								alt="logo"/></NavLink>
					</div>

					<div className={this.state.menuOpen ? 'menu-open navigation-menu top' : 'navigation-menu'}>
						<div className={this.state.menuOpen ? 'menu-open navigation-links' : ' navigation-links'}>
							<li onClick={this.closeMenu}><NavLink exact activeClassName='active-link'
																  to="/">{this.props.t('header.home')}</NavLink>
							</li>
							<li onClick={this.closeMenu}><NavLink activeClassName='active-link'
																  to="/work">{this.props.t('header.work')}</NavLink>
							</li>
							<li onClick={this.closeMenu}><NavLink activeClassName='active-link'
																  to="/services">{this.props.t(
								'header.services')}</NavLink>
							</li>
							<li onClick={this.closeMenu}><NavLink activeClassName='active-link'
																  to="/about">{this.props.t('header.about')}</NavLink>
							</li>
							{/*<li onClick={this.closeMenu}><NavLink activeClassName='active-link'*/}
							{/*to="/careers">{this.props.t("header.careers")}</NavLink>*/}
							{/*</li>*/}
							<li onClick={this.closeMenu}><NavLink activeClassName='active-link'
																  to="/contact">{this.props.t(
								'header.contact')}</NavLink>
							</li>
						</div>

						<div className={this.state.menuOpen ? 'menu-open menu-overlay top' : 'menu-overlay top'}></div>
						<div
							className={this.state.menuOpen
								? 'menu-open menu-overlay middle'
								: 'menu-overlay middle'}></div>
						<div
							className={this.state.menuOpen
								? 'menu-open menu-overlay bottom'
								: 'menu-overlay bottom'}></div>
					</div>

					<div style={{ visibility: 'hidden' }} className="translate-wrapper">
						{/*eslint-disable-next-line*/}
						<a className="translate-button rounded" onClick={Header.handleFlagClick} role="button"
						   style={{ padding: '0' }}>
							<img alt="current language flag" src={src} width="50px" height="30px"
								 style={{ verticalAlign: 'middle', padding: '5px 0 8px 0' }}/>
						</a>
					</div>

					<ul id="mobile-navigation" className="hamburger-wrapper">
						<div onClick={this.menuOpen} className="hamburger-box">
							<div ref={this.hamburger}
								 className={this.state.menuOpen ? 'hamburger-open hamburger-line' : 'hamburger-line'}>
							</div>
						</div>
					</ul>
				</div>
			</div>
		)
	}

}

export default translate(Header)
