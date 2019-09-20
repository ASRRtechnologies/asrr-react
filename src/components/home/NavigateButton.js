import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavigateButton extends Component {
    render() {

        const {text, to} = this.props;
        return (
            <div>
                <NavLink to={to}><span className="learn-more-arrow"><p>{text}</p></span></NavLink>
            </div>
        );
    }
}

export default NavigateButton;