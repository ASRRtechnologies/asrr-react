import React, {Component} from 'react';
import logo from "../../assets/images/logo.svg";
import bck from "../../assets/images/backgrounds/space-background.jpg";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class SplashScreen extends Component {
    render() {
        const { isOpen, onClose, message } = this.props;

        return (

            /*<div className="splash-screen-wrapper" style={{backgroundImage:`url(${bck})`}}>*/
        <div className="splash-screen-wrapper">
        <img src={logo} className="splash-screen-logo"/>
                {/*<p className="splash-screen-logo">ASRR</p>*/}
                 <div className="splash-loader">

                     <div className="loader">
                         <svg viewBox="0 0 80 80">
                             <circle id="test" cx="40" cy="40" r="32"></circle>
                         </svg>
                     </div>

                     <div className="loader triangle">
                         <svg viewBox="0 0 86 80">
                             <polygon points="43 8 79 72 7 72"></polygon>
                         </svg>
                     </div>

                     <div className="loader">
                         <svg viewBox="0 0 80 80">
                             <rect x="8" y="8" width="64" height="64"></rect>
                         </svg>
                     </div>

                 </div>

            </div>
        );
    }
}

export default SplashScreen;
