import React, {Component} from 'react';
import browser from '../../images/browserflattrimmed.png';
import { translate } from 'react-multi-lang';

class Landing extends Component {
	render() {
		return (
			<div className="landing-wrapper">
				<div id="landing-text">
					<h1>{this.props.t('landing.headline')}</h1>

                </div>

                <div id="landing-image">
                    <img src={browser} alt="browser"/>
                </div>
            </div>
        );
    }
}

export default translate(Landing);
