import React, {Component} from 'react';

class WorkCard extends Component {
    render() {
        const {title, brand} = this.props;
        return (
            <div className="work-card-wrapper">
                <div className="work-card-image">

                </div>

                <div className="work-card-description">
                    <p>IT Beheer</p>
                    <h2>FORM</h2>
                    <p className="work-card-read-more">Read more</p>

                </div>
            </div>
        );
    }
}

export default WorkCard;
