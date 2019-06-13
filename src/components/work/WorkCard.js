import React, {Component} from 'react';
import Logo from "../../assets/images/work/nike.png";
import Arrow from "../../assets/images/work/icons/angle-arrow-pointing-to-right.svg";

class WorkCard extends Component {
    render() {
        const {title, brand} = this.props;
        return (
            <div className="card">
                <div style={{backgroundImage: "url(https://picsum.photos/500/300/?image=10)"}}  className="card_image">
                    <img className="card-logo" src={Logo}/>
                </div>
                <div className="card_content">
                    <p className="card-title">Product design</p>
                    <h2 className="card_client">Nike</h2>
                    <div className="card-read-more">
                        <p>Read More</p>

                        <img src={Arrow} className="card-read-more-arrow"/>
                    </div>
                </div>
            </div> );
            {/*<div className="work-card-wrapper">*/}
                {/*<div className="work-card">*/}
                    {/*<div className="work-card-image">*/}
                        {/*<h2> Text</h2>*/}
                    {/*</div>*/}

                    {/*<div className="work-card-description">*/}
                        {/*<p>IT Beheer</p>*/}
                        {/*<h2>FORM</h2>*/}
                        {/*<p className="work-card-read-more">Read more</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="work-card-wrapper">*/}
                {/*<div className="work-card">*/}
                {/*<div className="work-card-image">*/}
                {/*<h2> Text</h2>*/}
                {/*</div>*/}

                {/*<div className="work-card-description">*/}
                {/*<p>IT Beheer</p>*/}
                {/*<h2>FORM</h2>*/}
                {/*<p className="work-card-read-more">Read more</p>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*</div>*/}
                {/*<div className="cards">*/}
                    {/*<li className="cards_item">*/}

                    {/*</li>*/}
                {/*</div>*/}
            {/*</div>*/}

    }
}

export default WorkCard;
