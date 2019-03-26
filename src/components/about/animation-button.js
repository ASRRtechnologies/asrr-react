import React, {Component} from "react";
import PropTypes from 'prop-types';
import Styled from 'styled-components';


const ButtonPressedStyle = {
	transform: "scale(0.8)"
};

const SpanWrapperStyle = {
	display: 'block',
	marginLeft: 'auto',
	marginRight: 'auto'
};

const AnimeButton = Styled.button`
    display: block;
    height: 40px;
    width: 180px;
    align-self: center;
    background: rgba(0, 0, 0, 0);
    border: 1px solid green;
    color: green;
    box-shadow: 1px 1px 2px rgba(20, 20, 20, 0.08);
    outline: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    margin-top: 60px;
    cursor: pointer;
    border-radius: 32px;
    transition: all 0.1s ease-in;
`;

export default class AnimationButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonPressed: false,
			animate: true
		};
		this.handlePressed = this.handlePressed.bind(this);
	}

	handlePressed() {
		this.props.handleClick();

		this.setState({
			buttonPressed: !this.state.buttonPressed,
			animate: !this.state.animate
		});

		window.setTimeout(() => {
			this.setState({
				buttonPressed: !this.state.buttonPressed
			});
		}, 50);

	}

	render() {
		return (
			<span>
        <AnimeButton
	        href="#"
	        onClick={this.handlePressed}
	        style={this.state.buttonPressed ? {...ButtonPressedStyle} : null}
        >
          {this.state.animate ? "Animate" : "Return"}
        </AnimeButton>
      </span>
		);
	}
}

AnimationButton.propTypes = {
	handleClick: PropTypes.func
};