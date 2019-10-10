import React, {Component} from 'react';

import ValueCards from "../home/ValueCards";
import NavLink from "react-router-dom/NavLink";
import {translate} from 'react-multi-lang'
import Hes from "../../assets/images/work/hes/hes-mobile_optimized.png";
import NWO from "../../assets/images/work/nwo/nwo-laptop-cropped_optimized.png";
import Form from "../../assets/images/work/form/form_logo.svg"
import ContactShortcut from "../shared/ContactShortcut";

class WorkGrid extends Component {
    render() {

        const {t} = this.props;

        const data = [
            {
                name: "NWO",
                url:"nwo",
				image:NWO
            },
            {
                name: "Hes",
                url:"hes",
				image: Hes,
            },
            {
                name: "Form",
                url:"form",
                image:Form,
            },
        ];

        return (
            // This div for the background color because inner div has a max-width of 1500px
            <div style={{backgroundColor: this.props.backgroundColor}}>
                <div className="section-container" id="work">
                    <div className="services-wrapper margin-work">
                        <h1>{t('work.portfolio.title')}</h1>
                        <p>{t('work.portfolio.text')}</p>
                    </div>
                    <div className="section-wrapper flex-center unresponsive-grid">
                        <div className="section-services-grid">
                            {data.map((data, i) => {
                                return <NavLink to={`work/${data.url}`} exact>
                                    <div className=" value-card-padding flex-center" key={data.key} >
                                        <ValueCards client={t(`work.portfolio.${data.name}.client`)} title={t(`work.portfolio.${data.name}.card.title`)}
                                                    text={t(`work.portfolio.${data.name}.card.text`)}
                                                    to={`work/${data.url}`} image={data.image}/>
                                    </div>
                                </NavLink>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate(WorkGrid);
