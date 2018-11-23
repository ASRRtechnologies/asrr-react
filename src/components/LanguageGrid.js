import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class LogoGrid extends Component {
    render() {
        return (
            <div className="grid-container">
                <Fade bottom>
                    <div className="item-container white">
                        <div className="language-item">
                            <Fade bottom>
                                {this.props.items.map((item, index) => {
                                    return <div key={index}>
                                        <img src={item.image} alt={item.name}/>
                                        <p>{item.name}</p>
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

export default translate(LogoGrid);
