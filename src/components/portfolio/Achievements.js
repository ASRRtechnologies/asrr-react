import React, {Component} from 'react';
import top from '../../images/achievements/top.svg';
import webDesign from '../../images/achievements/web-design.svg';
import webHosting from '../../images/achievements/web-hosting.svg';
import {translate} from "react-multi-lang";

class Achievements extends Component {
    render() {
        return (
            <div className="achievements background-white">
                    {/*TODO: Make data smart*/}
                    <h1>What we've done so far</h1>
                    <div className="row-container">
                        <div>
	                        <img src={top} alt="happy customers"/>
                            <h2>9 happy customers</h2>
                        </div>
                        <div>
	                        <img src={webDesign} alt="websites"/>

	                        <h2>10+ commercial websites<br/>
		                        2 full stack web shops<br/>
		                        2 side projects</h2>
                        </div>
                        <div>
	                        <img src={webHosting} alt="servers"/>

                            <h2>2 ASRR Servers</h2>
                        </div>
                    </div>


            </div>
        );
    }
}

export default translate(Achievements);
