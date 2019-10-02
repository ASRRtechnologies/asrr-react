import React, {Component} from 'react';
import {Spring, Trail, Transition, Keyframes, animated, config} from 'react-spring/renderprops';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpaceShuttle} from "@fortawesome/free-solid-svg-icons/faSpaceShuttle";

const Trailing = Keyframes.Trail( async next => {
    while(true){
        await next({
                    from: {transform: 'translate3d(0,-5px,0)', opacity: 0},
            opacity: 1,
            transform: 'translate3d(0,5px,0)',
        });
        await next({
                    from: {transform: 'translate3d(0,5px,0)'},
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
});


class Landing extends Component {
    render() {


        // const Trailing = Keyframes.Trail({
        //     initial: {
        //         from: {transform: 'translate3d(0,-10px,0)', opacity: 0},
        //         to: {transform: 'translate3d(0,0px,0)', opacity: 1}
        //     },
        //     hovering: {
        //         from: {opacity: 0},
        //         to: {opacity: 0.5}
        //     }
        // });






        const items = [
            {key:"A", item:<h1>A</h1>},
            {key:"S", item:<h1>S</h1>},
            {key:"S2", item:<h1>R</h1>},
            {key:"R", item:<h1>R</h1>},
        ];


        return (
            <div className="landing-container">


                <Spring
                    config={{duration: 1000}}
                    delay={500}
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

                {/*</div>*/}
                <div className="asrr-circle">

                    {/*<Trail items={items} keys={item => item.key}*/}
                    {/*       from={{transform: 'translate3d(0,-10px,0)', opacity: 0}}*/}
                    {/*       to={{transform: 'translate3d(0,0px,0)', opacity: 1}}>*/}
                    {/*    {item => props => <span className="asrr-circle-text" style={props}>{item}</span>}*/}
                    {/*</Trail>*/}

                    <Trailing items={items} keys={item => item.key}  >
                        {item => props => <span className="asrr-circle-text" style={props}>{item.item}</span>}
                    </Trailing>


                </div>

                {/*<Spring*/}
                {/*    config={{duration: 1000}}*/}
                {/*    delay={700}*/}
                {/*    from={{opacity: 0}}*/}
                {/*    to={{opacity: 1}}>*/}
                {/*    {props => (*/}
                {/*        <div className="landing-arrow" >*/}
                {/*            <FontAwesomeIcon className="landing-arrow" style={props} icon={faSpaceShuttle} />*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</Spring>*/}
            </div>
        );
    }
}

export default Landing;
