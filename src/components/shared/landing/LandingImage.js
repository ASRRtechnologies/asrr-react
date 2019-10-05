import React, {Component} from 'react';
import {Spring, Trail, Transition, Keyframes, animated, config} from 'react-spring/renderprops';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpaceShuttle} from "@fortawesome/free-solid-svg-icons/faSpaceShuttle";

const Trailing = Keyframes.Trail(async next => {
    await next({
        from: {transform: 'translate3d(0,-5px,0)', opacity: 0},
        opacity: 1,
        transform: 'translate3d(0,5px,0)',
    });
    await next({
        from: {transform: 'translate3d(0,5px,0)', opacity: 1},
        transform: 'translate3d(0,-5px,0)', opacity: 0
    })
});


class LandingImage extends Component {
    render() {
        const items = [
            {key: "A", item: <h1>A</h1>},
            {key: "S", item: <h1>S</h1>},
            {key: "R2", item: <h1>R</h1>},
            {key: "R", item: <h1>R</h1>},
        ];

        const absolute = {
            top: "0",
            left: 0,
            position: "absolute",
        }

        return (
            <div className="landing-container-image" style={{backgroundImage: `url(${this.props.image})`}}>
                {console.log(this.props.image)}
                <Spring
                    config={{duration: 1000}}
                    from={{x: 2000, opacity: 1}}
                    to={{x: 0, opacity: 0, visibilityChange:"none"}}>
                    {props => (
                        <React.Fragment>
                            <div style={{opacity: props.opacity}} className="landing-container">
                                <svg style={{opacity: props.opacity}} className="circle__svg">
                                    <circle className="large-circle" cx="50%" cy="50%" r="225" stroke={"black"}
                                            strokeDasharray={2000}
                                            strokeDashoffset={props.x}
                                            strokeWidth={5} fill={"none"}/>
                                    <circle className="medium-circle" cx="50%" cy="50%" r="150" stroke={"black"}
                                            strokeDasharray={2000}
                                            strokeDashoffset={props.x}
                                            strokeWidth={5} fill={"none"}/>
                                    <circle className="small-circle" cx="50%" cy="50%" r="100" stroke={"black"}
                                            strokeDasharray={2000}
                                            strokeDashoffset={props.x}
                                            strokeWidth={5} fill={"none"}/>
                                </svg>
                            </div>
                        </React.Fragment>
                    )}
                </Spring>

                <Spring
                    config={{duration: 1500, }}
                    from={{y: -100, opacity: 0}}
                    to={{y: 50, opacity: 1}}>
                    {props => (
                        <div style={{opacity:props.opacity}} className="landing-title">
                            <h1 className="landing-title">{this.props.title}</h1>
                        </div>
                    )}
                </Spring>

                <div className="asrr-circle">
                    <Trailing config={{duration: 300}} items={items} keys={item => item.key}>

                        {item => props => <span className="asrr-circle-text" style={props}>{item.item}</span>}
                    </Trailing>
                </div>
            </div>
        );
    }
}

export default LandingImage;
