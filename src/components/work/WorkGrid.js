import React, {Component} from 'react';
import WorkCard from "./WorkCard";
import Nike from "../../assets/images/work/nike.png";
import Google from "../../assets/images/work/google.png";
import Amazon from "../../assets/images/work/amazon.png";
import Plant from "../../assets/images/work/plants.jpg";
import PlantOverlay from "../../assets/images/work/plants-overlay.png";
import Building from "../../assets/images/work/form/building-min.png";
import BuildingOverlay from "../../assets/images/work/form/building-overlay-min.png";
import FormLogo from  "../../assets/images/work/form/form_logo.svg";
import form from "../../assets/images/clients/form_logo-diap.svg";

class WorkGrid extends Component {
	render() {
		return (
			<div className="work-grid-wrapper">
				<div className="work-card-wrapper">
					<WorkCard logo={form} background={Building} backgroundOverlay={BuildingOverlay}  alt="Form-logo" client="Form Architecture" title="Product design"/>
					<WorkCard logo={Google} background={Plant} backgroundOverlay={PlantOverlay} alt="Google-logo" client=" Google" title="Website design"/>
					<WorkCard logo={Amazon} background={Plant} backgroundOverlay={PlantOverlay} alt="Amazon-logo" client="Amazon" title="Consultancy"/>
				</div>
			</div>
		);
	}
}

export default WorkGrid;
