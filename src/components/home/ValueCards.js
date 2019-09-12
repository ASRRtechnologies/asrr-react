import React, {Component} from "react";
import AOS from 'aos';
import phone from "../../assets/images/home/hes_phone.png";
import NWO from "../../assets/images/home/laptop-nwo.png";

class ValueCards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        AOS.init()
    }


    render() {

        return (
            <div  className="value-cards-wrapper "> 
                <div className="value-cards-title"><p>Secure</p></div>
                <div><p>bdy</p></div>

                  
            </div>
        );
    }
}

export default ValueCards;
