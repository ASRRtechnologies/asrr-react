import React, {Component} from 'react';
import WorkCard from "./WorkCard";
import Nike from "../../assets/images/work/nike.png"
import Google from "../../assets/images/work/google.png"
import Amazon from "../../assets/images/work/amazon.png"
import Plant from "../../assets/images/work/plants.jpg"
import PlantOverlay from "../../assets/images/work/plants-overlay.png"

class WorkGrid extends Component {
	render() {
		return (
			<div className="work-grid-wrapper">
				<div className="work-card-wrapper">
					<WorkCard logo={Nike} background={Plant} backgroundOverlay={PlantOverlay}  alt="Nike-logo" client="Nike" title="Product design"/>
					<WorkCard logo={Google} background={Plant} backgroundOverlay={PlantOverlay} alt="Google-logo" client=" Google" title="Website design"/>
					<WorkCard logo={Amazon} background={Plant} backgroundOverlay={PlantOverlay} alt="Amazon-logo" client="Amazon" title="Consultancy"/>
				</div>
			</div>
		);
	}
}

export default WorkGrid;
