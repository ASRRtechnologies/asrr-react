import React, {Component} from 'react';

class WorkCard extends Component {
    render() {
        const {title, brand} = this.props;
        return (
            <div className="work-card-wrapper">
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
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid
                                    layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>



            </div>
        );
    }
}

export default WorkCard;
