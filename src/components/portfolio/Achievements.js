import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Achievements extends Component {
    render() {
        return (
            <div className="achievements white">
                <Fade bottom>
                    {/*TODO: Make data smart*/}
                    <h1>What we've done so far</h1>
                    <div className="row-container">
                        <div>
                            <h2>9 happy customers</h2>
                        </div>
                        <div>
                            <h2>10+ commercial websites, 2 full stack web shops, 2 side projects</h2>
                        </div>
                        <div>
                            <h2>2 ASRR Servers</h2>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Achievements;
