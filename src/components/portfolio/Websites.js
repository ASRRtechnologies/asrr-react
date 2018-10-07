import React, {Component} from 'react';
import kroontje from '../../images/portfolio/kroontje.png';
import lowpolypurple from '../../images/lowpolypurple.svg';

var lowPolyBackground = {
    backgroundImage: lowpolypurple
}

class Websites extends Component {
    render() {
        return (
            <div className="websites">
                <h1>Web</h1>
                <div className="background-wrapper">
                    <div className="portfolio-container" style={lowPolyBackground}>
                        <div>
                            <img src={kroontje}/>
                            <h2>Eethuys 't Kroontje</h2>
                            <p>The website for Eethuys 't Kroontje was one of the first websites we actually built. It was made using a very simple and responsive design. If you're looking for good food in a relaxing environment, check out their site by clicking the image above. If you're curious to a super secret prototype we made, click this.</p>
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
                </div>

                <h1>test</h1>
            </div>
        );
    }
}

export default Websites;
