import React, {Component} from 'react';

class Clients extends Component {
    render() {
        return (
            <div className="slider">
                <div className="slide-track">
                    {this.props.data.map((item) =>{
                        return <div className="slide">
                            <img src={item.image_src} height="100" width={item.width}
                                 alt={item.alt}/>
                        </div>
                    })}
                </div>
            </div>

        );
    }
}

export default Clients;
