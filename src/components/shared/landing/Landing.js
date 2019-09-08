import React, {Component} from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="landing-container" style={{backgroundImage:`url(${this.props.image})`}}>
                {/*<div className="landing-overlay">*/}

                {/*</div>*/}
                <h1 style={{fontSize:"100px", margin:"auto", color:"white", width:"auto"}}>
                    Services
                </h1>


            </div>
        );
    }
}

export default Landing;