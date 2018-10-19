import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import top from '../../images/achievements/top.svg';
import webdesign from '../../images/achievements/web-design.svg';
import webhosting from '../../images/achievements/web-hosting.svg';

class Achievements extends Component {
    render() {
        return (
            <div className="achievements background-white">
                <Fade bottom>
                    {/*TODO: Make data smart*/}
                    <h1>What we've done so far</h1>
                    <div className="row-container">
                        <div>
	                        <img src={top} alt="happy customers"/>
                            <h2>9 happy customers</h2>
                        </div>
                        <div>
	                        <img src={webdesign} alt="websites"/>

	                        <h2>10+ commercial websites<br/>
		                        2 full stack web shops<br/>
		                        2 side projects</h2>
                        </div>
                        <div>
	                        <img src={webhosting} alt="servers"/>

                            <h2>2 ASRR Servers</h2>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Achievements;
