import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class ServiceGrid extends Component {
    render() {
        return (
            <div className="grid-container white">
                <h1>{this.props.t(this.props.section)}</h1>
                <Fade bottom>
                    <div className="item-container">
                        <div className="item-cards">
                            <Fade bottom>
                                {this.props.items.map((item) => {
                                    return <div>
                                        <h2>{this.props.t('services.' + item.service + ".name")}</h2>
                                        <div className="card-description">
                                            <p>{this.props.t('services.' + item.service + ".description")}</p>
                                        </div>
                                    </div>
                                })}
                            </Fade>
                        </div>
                    </div>
                </Fade>

            </div>
        );
    }
}

export default translate(ServiceGrid);
