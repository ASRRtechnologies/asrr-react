import {Component} from "react";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div>
                    <h2>Find us on</h2>
                    <a><FontAwesomeIcon icon={["fab","github"]}/></a>
                    <a><FontAwesomeIcon icon={["fab","linkedin"]}/></a>
                    <a><FontAwesomeIcon icon={["fab","facebook"]}/></a>
                </div>

            </div>
        );
    }
}

export default Footer;
