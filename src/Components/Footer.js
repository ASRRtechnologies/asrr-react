import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
	        <div class="footer diagonal">
                <div>
	                {/*<h2>Find us on</h2>*/}
	                <a href="http://github.com"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                    <a><FontAwesomeIcon icon={["fab","linkedin"]}/></a>
                    <a><FontAwesomeIcon icon={["fab","facebook"]}/></a>
                </div>

            </div>
        );
    }
}

export default Footer;
