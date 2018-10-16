import React, {Component} from 'react';
import kroontje from '../../images/portfolio/kroontje.png';
import Fade from 'react-reveal/Fade';



class Websites extends Component {
    render() {
        return (
            <div className="websites">

                <div className="web-header">
                    <h1>Websites</h1>
                </div>
                <Fade bottom>
                    <div className="background-wrapper">
                        <div className="portfolio-container">
                            <Fade bottom>
                                {this.props.items.map((item, index) => {
                                    return <div key={index} className="drop-shadow">
                                        <img src={item.image} alt="Website Kroontje"/>
                                        <h2>{item.name}</h2>
                                    </div>
                                })}
                            </Fade>
                        </div>
                    </div>
                </Fade>

                <h1>Desktop</h1>
            </div>
        );
    }
}

export default Websites;
