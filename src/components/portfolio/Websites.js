import React, {Component} from 'react';
import kroontje from '../../images/portfolio/kroontje.png'

class Websites extends Component {
	render() {
		return (
			<div className="websites">
				<h1>Web</h1>
				<div className="portfolio-container">
					<div>
						<img src={kroontje}/>
						<h2>Eethuys 't Kroontje</h2>
					</div>

                    <div>
                        <img src={kroontje}/>
                        <h2>Eethuys 't Kroontje</h2>
                    </div>

                    <div>
                        <img src={kroontje}/>
                        <h2>Eethuys 't Kroontje</h2>
                    </div>
				</div>

				<h1>test</h1>
			</div>
		);
	}
}

export default Websites;
