import React, {Component} from "react";
import NavLink from "react-router-dom/NavLink";

class ValueCards extends Component {
    render() {
        const {image, title, text, height, to, cover} = this.props;
        return (
            <div className="value-cards-wrapper">
                <div className="value-image-cards-wrapper">
                    <div className="value-cards-image"
                         style={{backgroundImage: `url(${image})`, backgroundSize:cover}}>

                    </div>
                </div>
                <div>
                    <h2>Hes International</h2>
                    <h3>{title}</h3>
                    {/*<p>{text}</p>*/}
                    <NavLink exact to={to}>
                        <span className="learn-more-arrow"><p>Read more</p></span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default ValueCards;
