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
            <div className="services-wrapper" style={{backgroundImage:`${this.props.backgroundColor}`, color:`${this.props.color}`}}>
                    <h1>{this.props.title}</h1>
                    <p>{[this.props.text]}</p>
            </div>
        );
    }
}

export default translate(ChoiceHelper);
