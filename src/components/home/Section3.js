import React, {Component} from "react";
import AOS from "aos";
import Server from "../../assets/images/services/icons/database-icon.svg"
import developer from "../../assets/images/home/programming.jpg";
import management from "../../assets/images/home/management.jpg";
import innovative from "../../assets/images/home/nasa.jpg";

import ValueCards from "./ValueCards";
import {getScrollPosition} from "../shared/Functions";

class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        AOS.init();
        // const props = this.props;
        // window.addEventListener("scroll", function _scrollHandler (){
        //     getScrollPosition("services", props)
        // })
    }
    //
    // componentWillUnmount() {
    //     const props = this.props;
    //     window.removeEventListener("scroll", function _scrollHandler(){
    //         getScrollPosition("services", props)
    //     })
    // }

    render() {
        const services = [
            {
                title: "Power BI Dashboard",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: management,
                delay:"200ms",
                key:"management"
            },
            {
                title: "Server Design",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: developer,
                delay:"400ms",
                key:"Server"
            },
            {
                title: "Webdesign",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: innovative,
                delay:"500ms",
                key:"Webdesign"
            },
            {
                title: "Desktop Applications",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: developer,
                delay:"600ms",
                key:"Desktop applications"

            },
        ]

        return (
            <div className="section-container" id="services">
                <div className="services-wrapper" style={{backgroundImage:`${this.props.backgroundColor}`, color:`${this.props.color}`}}>
                    <h1>{this.props.title}</h1>
                    <p>{[this.props.text]}</p>
                </div>
                <div className="section-wrapper flex-center unresponsive-grid">
                    <div className="section-services-grid">
                        {services.map((data, i) => {
                            return <div className=" value-card-padding flex-center" key={data.key} data-aos="-up" data-aos-delay={data.delay} data-aos-easing="ease-in-out"
                                        data-aos-anchor-placement="top"
                                        data-aos-duration="600">
                                <ValueCards  text={data.text} image={data.image} title={data.title}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section3;
