import React, {Component} from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import imageOne from "../../assets/images/work/hes/hes.png";
import imageTwo from "../../assets/images/work/hes/hes-overlay.png";
import imageThree from "../../assets/images/work/hes/HES-logo-dark.png";
class Testimonial extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <img src={imageOne} />
                    <img src={imageTwo} />
                    <img src={imageThree} />
                </Carousel>
            </div>
        );
    }
}

export default Testimonial;
