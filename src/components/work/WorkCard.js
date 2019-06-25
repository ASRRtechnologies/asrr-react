import React, {Component} from 'react';
import Arrow from "../../assets/images/work/icons/angle-arrow-pointing-to-right.svg";

class WorkCard extends Component {
    render() {
        const {title, client, logo, alt, background, backgroundOverlay} = this.props;
        return (
            <div className="work-card">
                <div style={{backgroundImage: `url(${background})`}} className="work-card_image">
                    <div style={{backgroundImage: `url(${backgroundOverlay})`}}
                             className="work-card-overlay">
                    </div>
                    <img className="work-card-logo" alt={alt} src={logo}/>
                </div>
                <div className="work-card_content">
                    <p className="work-card-title">{title}</p>
                    <h2 className="work-card_client">{client}</h2>
                    <div className="work-card-read-more">
                        <span style={{display:"inline"}} >
                            <p>Read More</p>
                            <img src={Arrow} alt="arrow" className="work-card-read-more-arrow"/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkCard;
