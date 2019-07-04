import React, { Component } from 'react'

class GeneralHeader extends Component {
	render () {
		return (
			<div className="general-header" style={{marginBottom:this.props.marginBottom}}>
				<h1 style={{color:this.props.titleColor}}>{this.props.title}</h1>
				{this.props.line ? <span className="general-header-line" style={{}}> </span>: null}
				<p style={{color:this.props.subText_color}}>{this.props.subText}</p>
			</div>
		)
	}
}

export default GeneralHeader