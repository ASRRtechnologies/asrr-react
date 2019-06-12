import React, {Component} from 'react';
import WorkCard from "./WorkCard";

class WorkGrid extends Component {
	render() {
		return (
			<div className="work-grid-wrapper">
				<div className="work-card-wrapper">
					<WorkCard/>
					<WorkCard/>
					<WorkCard/>
				</div>
			</div>
		);
	}
}

export default WorkGrid;
