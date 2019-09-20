import React, {Component} from "react";
import AOS from "aos";
import Dashboard from "../../assets/images/services/icons/dashboard-icon.svg"
import Server from "../../assets/images/services/icons/database-icon.svg"
import ValueCards from "./ValueCards";

class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        AOS.init();
    }


    render() {
        const services = [
            {
                title: "Power BI Dashboard",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: Dashboard
            },
            {
                title: "Server Design",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: Server
            },


        ]

        return (
            <div className="section-container">
                <div className="section-wrapper">
                    <div className="section-text">
                        <h2>Services</h2>
                        <p style={{width: "80%"}}> zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                            bedrijfstak sinds de 16e eeuw zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                            bedrijfstak sinds de 16e eeuw</p>
                        <span className="learn-more-arrow"><p>See all our services</p></span>
                    </div>

                    <div className="section-services-grid">
                        {services.map((data, i) => {
                            return <React.Fragment>
                                <ValueCards key={i} text={data.text} image={data.image} title={data.title}/>
                            </React.Fragment>
                        })}
                    </div>


                </div>
            </div>
        );
    }
}

export default Section3;
