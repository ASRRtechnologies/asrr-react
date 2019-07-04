import React, {Component} from 'react';
import WorkCard from "./WorkCard";
import Nike from "../../assets/images/work/nike.png";
import Google from "../../assets/images/work/google.png";
import Amazon from "../../assets/images/work/amazon.png";
import Plant from "../../assets/images/work/plants.jpg";
import PlantOverlay from "../../assets/images/work/plants-overlay.png";
import Building from "../../assets/images/work/form/building-min.png";
import BuildingOverlay from "../../assets/images/work/form/building-overlay-min.png";
import Form from  "../../assets/images/work/form/form_logo.svg";
import Container from "../../assets/images/work/hes/hes.png";
import ContainerOverlay from "../../assets/images/work/hes/hes-overlay.png";
import Hes from "../../assets/images/work/hes/HES-logo-dark.png";
import GeneralHeader from '../shared/GeneralHeader';



class WorkGrid extends Component {
	render() {
		return (
			<div className="work-grid-wrapper">
				<GeneralHeader title="Work" titleColor="white" subText_color="white" marginBottom="50px"
							   subText={`See some of our previous work`}/>
				<div className="work-card-wrapper">
					<WorkCard logo={Form} background={Building} backgroundOverlay={BuildingOverlay}  alt="Form-logo" client="Form Architecture" title="Bim configuration"/>
					<WorkCard logo={Hes} background={Container} backgroundOverlay={ContainerOverlay} alt="Hes-logo" client=" Hes" title="Steel Tracker & Quality Control"/>
					<WorkCard logo={Amazon} background={Plant} backgroundOverlay={PlantOverlay} alt="Amazon-logo" client="Amazon" title="Consultancy"/>
				</div>
			</div>
		);
	}
}

export default WorkGrid;
