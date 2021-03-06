import React, {Component} from 'react';
import WorkCard from "./WorkCard";
import Amazon from "../../assets/images/work/amazon.png";
import Plant from "../../assets/images/work/plants.jpg";
import PlantOverlay from "../../assets/images/work/plants-overlay.png";
import Building from "../../assets/images/work/form/building-min.png";
import BuildingOverlay from "../../assets/images/work/form/building-overlay-min.png";
import Form from "../../assets/images/work/form/form_logo.svg";
import Container from "../../assets/images/work/hes/hes.png";
import ContainerOverlay from "../../assets/images/work/hes/hes-overlay.png";
import Hes from "../../assets/images/work/hes/HES-logo-dark.png";


class WorkGrid extends Component {
	render() {
		return (
			// This div for the background color because inner div has a max-width of 1500px
			<div style={{backgroundColor:this.props.backgroundColor}}>
				<div className="work-grid-wrapper">
					{this.props.component}
					<div className="work-card-wrapper">
						<WorkCard logo={Form} background={Building} backgroundOverlay={BuildingOverlay}  alt="Form-logo" client="Form Architecture" title="BIM Configurator & Scalable REST API"/>
						<WorkCard logo={Hes} background={Container} backgroundOverlay={ContainerOverlay} alt="Hes-logo" client=" Hes" title="Steel Tracker & Quality Control"/>
						<WorkCard logo={Amazon} background={Plant} backgroundOverlay={PlantOverlay} alt="Amazon-logo" client="ESP Consultancy" title="Web Design"/>
					</div>
				</div>
			</div>
		);
	}
}

export default WorkGrid;
