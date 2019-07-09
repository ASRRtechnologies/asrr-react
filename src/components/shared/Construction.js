import React, {Component} from 'react';
import background from "../../assets/images/construction/rocketBackground.svg";
import rocket from "../../assets/images/construction/rocket.svg"
import logo from "../../assets/images/logo.svg";

class Construction extends Component {
    render() {
        return (
            <div className="construction-wrapper" style={{backgroundImage: `url(${background})`}}>
                <h2>Under construction...</h2>
                <img src={rocket} className="rocket"/>

                {/*<img src={logo} className="construction-logo"/>*/}

            </div>
        );
    }
}

export default Construction;
