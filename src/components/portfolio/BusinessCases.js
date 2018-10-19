import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class BusinessCases extends Component {
    render() {
        return (
	        <div className="background-white center-header">
                <Fade bottom>
                    <h1>Business Cases</h1>
	                <div className="row-container double business-cases">
                        <div>
                            <h2>FORM Architectuur & Engineering</h2>
	                        <h3>Features</h3>
	                        <ul>
		                        <li>Server Setup</li>
		                        <li>Continuous Deployment</li>
		                        <li>Simple Back-End</li>
	                        </ul>
                        </div>
		                <div>

			                <p>
				                For FORM, we set up a windows server. As most of our client data is confidential, we
				                can't say much about the contents of this server. What we can tell is what we've done.
				                First off, we set up the server from scratch, providing remote desktop capabilities,
				                opening up the correct ports for API access and installing the required programs.
			                </p>
			                <br/>
			                <p>
				                Next, we set up one of our continuous deployment systems for their internal product.
				                This system automatically closes the program using the code and downloads the latest
				                version whenever a new stable build is available on their private GitHub repository.
				                The project is then built locally in the required folder and is automatically signed.
				                After all tests have passed, the back-end spins up again and is ready to handle requests
				                again.
			                </p>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default BusinessCases;
