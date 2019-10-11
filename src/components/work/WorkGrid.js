import React, {Component} from 'react';
import ValueCards from "../home/ValueCards";
import NavLink from "react-router-dom/NavLink";
import {translate} from 'react-multi-lang'
import {portfolioImages} from '../shared/PortfolioImages'

class WorkGrid extends Component {
    render() {
        const {t} = this.props;
        const data = [
            {
                name: "NWO",
                url:"nwo",
				image:portfolioImages.NWO.landing,
                overlay: portfolioImages.NWO.overlay
            },
            {
                name: "Hes",
                url:"hes",
				image: portfolioImages.Hes.landing,
                overlay: portfolioImages.Hes.overlay
            },
            {
                name: "Form",
                url:"form",
                image:portfolioImages.Form.landing,
                overlay: portfolioImages.Form.overlay
            },
        ];

        return (
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
                                                    to={`work/${data.url}`} image={data.image} overlay={data.overlay}/>
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
