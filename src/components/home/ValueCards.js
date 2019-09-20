import React, {Component} from "react";
class ValueCards extends Component {
    render() {
        const {image, title, text, height} = this.props;
        return (
            <div  className="value-cards-wrapper ">
                <div style={{height:"80px"}}>
                <img style={{height:height}} className="value-cards-image" src={image}/>
                </div>
                <h3>{title}</h3>
                <div style={{height:"150px"}}>
                    <p>{text}</p>
                </div>
                <span className="learn-more-arrow"><p>Read more</p></span>
            </div>
        );
    }
}
export default ValueCards;
