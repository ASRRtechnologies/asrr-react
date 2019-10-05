import React, {Component} from 'react';
import Form from "../../assets/images/work/form/form_logo.svg";
import Hes from "../../assets/images/work/hes/HES-logo-dark.png";
import ValueCards from "../home/ValueCards";
import NavLink from "react-router-dom/NavLink";
import {translate} from 'react-multi-lang'
import phone from "../../assets/images/home/remote.jpg";
import Desktop from "../../assets/images/work/nwo/nwo-desktop.png";
import ContactShortcut from "../shared/ContactShortcut";

// import Language from '../../utils/Language';


class WorkGrid extends Component {
    render() {

        const {t} = this.props;

        const data = [
            {
                name: "NWO",
				image:Desktop
            },
            {
                name: "Hes",
				image: phone,
            },
            {
                name: "Form"
            },
        ];

        return (
            // This div for the background color because inner div has a max-width of 1500px
            <div style={{backgroundColor: this.props.backgroundColor}}>
                <div className="section-container" id="services">
                    {/*<div className="services-wrapper"*/}
                    {/*     style={{backgroundImage: `${this.props.backgroundColor}`, color: `${this.props.color}`}}>*/}
                    {/*    <h1>{this.props.title}</h1>*/}
                    {/*    <p>{[this.props.text]}</p>*/}
                    {/*</div>*/}
                    <div className="services-wrapper margin-work">
                        <h1>{t('work.portfolio.title')}</h1>
                        <p>{t('work.portfolio.text')}</p>
                    </div>
                    <div className="section-wrapper flex-center unresponsive-grid">
                        <div className="section-services-grid">
                            {data.map((data, i) => {
                                return <NavLink to={`work/${data.name}`}>
                                    <div className=" value-card-padding flex-center" key={data.key} >
                                        <ValueCards cover="cover" title={t(`work.portfolio.${data.name}.card.title`)}
                                                    text={t(`work.portfolio.${data.name}.card.text`)}
                                                    to={`work/${data.name}`} image={data.image}/>
                                    </div>
                                </NavLink>
                            })}
                        </div>
                    </div>
                    <ContactShortcut/>

                </div>
                {/*<div className="work-grid-wrapper">*/}
                {/*	{this.props.component}*/}
                {/*	<div className="work-card-wrapper">*/}
                {/*		<WorkCard logo={Form} background={Building} backgroundOverlay={BuildingOverlay}  alt="Form-logo" client="Form Architecture" title="BIM Configurator & Scalable REST API"/>*/}
                {/*		<WorkCard logo={Hes} background={Container} backgroundOverlay={ContainerOverlay} alt="Hes-logo" client=" Hes" title="Steel Tracker & Quality Control"/>*/}
                {/*		<WorkCard logo={Amazon} background={Plant} backgroundOverlay={PlantOverlay} alt="Amazon-logo" client="ESP Consultancy" title="Web Design"/>*/}
                {/*	</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default translate(WorkGrid);
