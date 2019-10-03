import React, {Component} from 'react';
import {withScroll} from "../shared/withScroll";


class ScrollPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }


    // getScroll = () => {
    //     let element = document.getElementById("work");
    //     let elementPos = element.getBoundingClientRect().top;
    //     let elementHeight = element.offsetHeight;
    //
    //     if (elementPos < 100 && elementPos > (-0.8 * elementHeight)) {
    //         console.log("in screen")
    //     }
    //     this.setState({data: this.props.data});
    //     console.log(this.state)
    // }

    componentDidMount() {
        window.addEventListener("scroll", this.getScroll)
    }

    render() {
        return (
            <div className="scroll-nav-container">

            </div>
        );
    }
}

ScrollPosition.propTypes = {};

export default withScroll(ScrollPosition);
