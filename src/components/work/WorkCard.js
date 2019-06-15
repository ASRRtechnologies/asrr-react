import React, {Component} from 'react';
import Arrow from "../../assets/images/work/icons/angle-arrow-pointing-to-right.svg";

class WorkCard extends Component {
    render() {
        const {title, client, logo, alt} = this.props;
        return (
            <div className="card">
                <div style={{backgroundImage: "url(../../assets/images/work/icons/angle-arrow-pointing-to-right.svg)"}} className="card_image">
                    <div style={{backgroundImage: "url(../)"}}> </div>
                    <img className="card-logo" alt={alt} src={logo}/>
                </div>
                <div className="card_content">
                    <p className="card-title">{title}</p>
                    <h2 className="card_client">{client}</h2>
                    <div className="card-read-more">
                        <p>Read More</p>
                        <img src={Arrow} alt="arrow" className="card-read-more-arrow"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkCard;
