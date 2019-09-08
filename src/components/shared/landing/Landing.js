import React, {Component} from 'react';
import {Spring, Trail, Transition} from 'react-spring/renderprops'

class Landing extends Component {
    render() {


        return (
            <div className="landing-container">
                <Spring
                    config={{duration: 1000}}
                    from={{x: 2000}}
                    to={{x: 0}}>
                    {props => (
                        <svg width="100vw" height="100vh" className="circle__svg">
                            <circle cx="50%" cy="50%" r="225" stroke={"black"} strokeDasharray={2000}
                                    strokeDashoffset={props.x}
                                    strokeWidth={5} fill={"none"}/>
                        </svg>
                    )}
                </Spring>
                {/*<div className="landing-container" style={{backgroundImage:`url(${this.props.image})`}}>*/}

                {/*<div className="landing-overlay">*/}

                {/*</div>*/}
                <div className="asrr-circle">
                    <Spring
                        delay={700}
                        config={{duration: 1000}}
                        from={{y: 3, opacity:0}}
                        to={{y: 3.2, opacity:1}}>
                        {props => (
                            <h1 style={{fontSize:"120px", opacity:props.opacity}}>
                                ASRR
                            </h1>
                        )}
                    </Spring>

                </div>

                <div>
                    <p>Click me</p>
                </div>


            </div>
        );
    }
}

export default Landing;