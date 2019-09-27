import React, {Component} from "react";
import {translate} from "react-multi-lang"
import {Link} from "react-router-dom";
import {FiCode, FiServer, FiSmile} from "react-icons/fi"

class ChoiceHelper extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            service: 'software'
        }
    }




    render() {


        let self = this;

        return (
            <div className="services-wrapper">
                <div style={{paddingTop:"50px"}}>
                    <h1 style={{maxWidth: "90%", margin: "auto"}}>{this.props.title}</h1>
                    <p style={{
                        width: "700px",
                        margin: "auto",
                        maxWidth: "90%"
                    }}>{[this.props.text]}</p>
                </div>
                {/*<div>*/}
                {/*    <h2>See all of our work</h2>*/}

                {/*    <div className="centerButton-wrapper">*/}
                {/*        <Link to="/Services"*/}
                {/*              className="rounded centerButton">{this.props.t('buttons.service')}</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <br/>
            </div>
        );
    }
}

export default translate(ChoiceHelper);
