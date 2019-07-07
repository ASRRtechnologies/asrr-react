import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';
import ReadMoreReact from "read-more-react";
import ServiceCard from './ServiceCard'

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class ServiceGrid extends Component {
    render() {
        return (
            <div className="services-grid">

                <Fade bottom>
                    {this.props.items.map((item) => {
                        {console.log(item.image)}
                        return <ServiceCard image={item.image} textPreview={item.previewText} color={item.color} service={item.service}/>

                    })}

                </Fade>

            </div>
        );
    }
}

export default translate(ServiceGrid);
