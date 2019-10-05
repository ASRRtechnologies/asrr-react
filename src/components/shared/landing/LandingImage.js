import React, {Component} from 'react';

class LandingImage extends Component {
    render() {
        return (
            <div className="landing-container-image" style={{backgroundImage:`url(${this.props.image})`}}>

                <h1>{this.props.title}</h1>

            </div>
        );
    }
}

export default LandingImage;
