import React, {Component} from 'react';
import top from '../../images/achievements/top.svg';
import webDesign from '../../images/achievements/web-design.svg';
import webHosting from '../../images/achievements/web-hosting.svg';
import {translate} from "react-multi-lang";
import CountUp from 'react-countup';

function diff_hours(dt2, dt1) {

	var diff = (dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60);
	return Math.abs(Math.round(diff));

}

var diff;

class Achievements extends Component {
	constructor() {
		super();
		const dt1 = new Date("February 16, 2016 08:11:00");
		const dt2 = new Date();
		diff = diff_hours(dt1, dt2);
	}
    render() {
        return (
            <div className="achievements background-white">
                    {/*TODO: Make data smart*/}
                    <h1>What we've done so far</h1>
                    <div className="row-container">
                        <div>
	                        <img src={top} alt="happy customers"/>
	                        <h2><CountUp duration={10} end={9}/> {this.props.t("portfolio.achievements.happy")}</h2>
                        </div>
                        <div>
	                        <img src={webDesign} alt="websites"/>

	                        <h2><CountUp duration={10}
	                                     end={10}/>+ {this.props.t("portfolio.achievements.commercial")}<br/>
		                        <CountUp duration={20} end={30000}/>+ {this.props.t("portfolio.achievements.pageViews")}<br/>
		                        <CountUp duration={3} end={2}/> {this.props.t("portfolio.achievements.fullStack")}<br/>
		                        <CountUp duration={3} end={2}/> {this.props.t("portfolio.achievements.sideProjects")}
	                        </h2>
                        </div>
                        <div>
	                        <img src={webHosting} alt="servers"/>

	                        <h2><CountUp duration={3} end={2}/> ASRR Servers<br/>
		                        <CountUp duration={20} end={diff}/>+ {this.props.t("portfolio.achievements.upTime")}
	                        </h2>
                        </div>
                    </div>


            </div>
        );
    }
}

export default translate(Achievements);
