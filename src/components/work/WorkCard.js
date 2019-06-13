import React, {Component} from 'react';
import Logo from "../../assets/images/work/nike.png";
import Arrow from "../../assets/images/work/icons/angle-arrow-pointing-to-right.svg";

class WorkCard extends Component {
    render() {
        const {title, client, logo} = this.props;
        return (
            <div className="card">
                <div style={{backgroundImage: "url(https://picsum.photos/500/300/?image=10)"}}  className="card_image">
                    <img className="card-logo" src={logo}/>
                </div>
                <div className="card_content">
                    <p className="card-title">{title}</p>
                    <h2 className="card_client">{client}</h2>
                    <div className="card-read-more">
                        <p>Read More</p>

                        <img src={Arrow} alt="arrow" className="card-read-more-arrow"/>
                    </div>
                </div>
            </div> );
    }
}

export default WorkCard;
