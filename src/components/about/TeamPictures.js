import React, {Component} from 'react';
import teamOne from '../../assets/images/team/team1.jpg';
import teamTwo from '../../assets/images/team/team2.jpg'


class TeamPictures extends Component {
	render() {
		return (
			<div className="team-images">
				<div className="upper">
					<img alt="team pic 1" className="primary" src={teamOne}/>
					<img alt="team pic 2" className="left secondary" src={teamTwo}/>
					<img alt="team pic 3" className="right secondary" src={teamTwo}/>
				</div>
				<div className="lower background-white">
				</div>
			</div>
		);
	}
}

export default TeamPictures;
