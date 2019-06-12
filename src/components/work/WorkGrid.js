import React, {Component} from 'react';
import WorkCard from "./WorkCard";

class WorkGrid extends Component {
	render() {
		return (
			<div className="work-grid-wrapper">
				<WorkCard/>
				<WorkCard/>
				<WorkCard/>

			</div>
		);
	}
}

export default WorkGrid;
