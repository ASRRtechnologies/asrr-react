import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from "react-multi-lang";



class Websites extends Component {
    render() {
        return (
            <div className="websites">

                <div className="web-header">
                    <h1>{this.props.t(this.props.section)}</h1>
                </div>
                <Fade bottom>
                    <div className="background-wrapper">
                        <div className="portfolio-container">
                            <Fade bottom>
                                {this.props.items.map((item, index) => {
                                    return <div key={index} className="drop-shadow">
                                        <img src={item.image} alt="Website Kroontje"/>
                                        <h2>{item.name}</h2>
                                    </div>
                                })}
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default translate(Websites);
