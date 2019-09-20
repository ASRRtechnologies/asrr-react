import React, {Component} from "react";
class ValueCards extends Component {
    render() {
        const {image, title, text} = this.props;
        return (
            <div  className="value-cards-wrapper ">
                <img className="value-cards-image" src={image}/>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        );
    }
}
export default ValueCards;
