import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class TeamCards extends Component {
    render() {
        return (
            <div className="grid-container white team">
                <h1>{this.props.t(this.props.section)}</h1>
                <Fade bottom>
                    <div className="item-container">
                        <div className="item-cards">
                            <Fade bottom>
	                            {this.props.items.map((item, index) => {
		                            return <div key={index}>
                                        <h2>{item.fullName}</h2>
                                        <h3>{item.jobTitle}</h3>
                                        <div className="card-description">
	                                        <div>Background: {item.background}</div>
	                                        <div>Expertise: {item.tasks}</div>
	                                        <div>Languages: {item.languages}</div>
                                        </div>
                                        <div className="card-links">
                                            <a href={"http://github.com/" + item.github}><FontAwesomeIcon
                                                icon={["fab", "github"]}/></a>
                                            <a href={item.linkedin}><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
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

export default translate(TeamCards);
