import React, {Component} from "react";

class ValueCards extends Component {
    render() {
        const {image, title, text, height} = this.props;
        return (
            <div className="value-cards-wrapper">
                <div className="value-image-wrapper">
                    <div className="value-cards-image" style={{backgroundImage: `url(${image})`}}></div>
                </div>
                <div>
                    <h3>3D BIM modelling</h3>
                    <p>With revit we can customize any 3d houses so that its very nice</p>
                    <span className="learn-more-arrow"><p>Read more</p></span>
                </div>
            </div>
        );
    }
}

export default ValueCards;
