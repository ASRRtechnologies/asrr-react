import React, { Component } from 'react'
import { Keyframes, Spring } from 'react-spring/renderprops'
import { NavHashLink as NavLink } from 'react-router-hash-link'

const Trailing = Keyframes.Trail(async next => {
	while (true) {
		await next({
			from: { transform: 'translate3d(0,-5px,0)', opacity: 0 },
			opacity: 1,
			transform: 'translate3d(0,5px,0)',
		})
		await next({
			from: { transform: 'translate3d(0,5px,0)' },
			transform: 'translate3d(0,-5px,0)',
		})

		// await next({
		//     from: { transform: 'translate3d(0,0px,0)'},
		//
		//     transform: 'translate3d(0,15px,0)',
		//     opacity: 1
		//
		// })
	}
})

class Landing extends Component {
	render () {
		const items = [
			{ key: 'A', item: <h1>A</h1> },
			{ key: 'S', item: <h1>S</h1> },
			{ key: 'R2', item: <h1>R</h1> },
			{ key: 'R', item: <h1>R</h1> },
		]
		return (
			<div className="landing-container" style={{ backgroundImage: this.props }}>
				<Spring
					config={{ duration: 1000 }}
					delay={500}
					from={{ x: 2000, opacity: 1 }}
					to={{ x: 0, opacity: 0 }}>
					{props => (
						<svg style={{}} className="circle__svg">
							<circle className="large-circle" cx="50%" cy="50%" r="225" stroke={'black'}
									strokeDasharray={2000}
									strokeDashoffset={props.x}
									strokeWidth={5} fill={'none'}/>
							<circle className="medium-circle" cx="50%" cy="50%" r="150" stroke={'black'}
									strokeDasharray={2000}
									strokeDashoffset={props.x}
									strokeWidth={5} fill={'none'}/>
							<circle className="small-circle" cx="50%" cy="50%" r="100" stroke={'black'}
									strokeDasharray={2000}
									strokeDashoffset={props.x}
									strokeWidth={5} fill={'none'}/>
						</svg>
					)}
				</Spring>
				<div className="asrr-circle">
					<Trailing items={items} keys={item => item.key}>
						{item => props => <span className="asrr-circle-text" style={props}>{item.item}</span>}
					</Trailing>

					<NavLink to="/#home-page-work">
						<div className="scroll-down-mouse-container">
							<h2>{this.props.text}</h2>
						</div>
					</NavLink>
				</div>
			</div>
		)
	}
}

export default Landing
