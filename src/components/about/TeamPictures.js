import React, {Component} from 'react';
import teamOne from '../../images/team/team1.jpg';
import teamTwo from '../../images/team/team2.jpg'


class TeamPictures extends Component {
	render() {
		return (
			<div className="team-images">
				<div className="upper">
					<img className="primary" src={teamOne}/>
					<img className="left secondary" src={teamTwo}/>
					<img className="right secondary" src={teamTwo}/>
				</div>
				<div className="lower background-white">
				</div>
			</div>
		);
	}
}

export default TeamPictures;
