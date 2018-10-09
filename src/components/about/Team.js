import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Team extends Component {
    render() {
        return (
            <div className="team-component white">
                <h1>{this.props.section}</h1>
                <Fade bottom>
                    <div className="item-container">
                        <div className="item-cards">
                            <Fade bottom>
                                <div>
                                    <h2>Amar Ramdas</h2>
                                    <h3>CEO</h3>
                                    <p>Front end, back end</p>
                                </div>
                                <div>
                                    <h2>Satyam Mohan</h2>
                                    <h3>CTO</h3>
                                    <p>Back end</p>
                                </div>
                                <div>
                                    <h2>Ré-Angelo Jarvis</h2>
                                    <h3>CMO</h3>
                                    <p>Front end, back end</p>
                                </div>
                                <div>
                                    <h2>Rayel Hardwarsing</h2>
                                    <h3>CFO</h3>
                                    <p>Front end, back end</p>
                                </div>



                            </Fade>
                        </div>
                    </div>
                </Fade>

                <h1>Desktop</h1>
            </div>
        );
    }
}

export default Team;
