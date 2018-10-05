import {Component} from "react";
import React from "react";

class Services extends Component {
    render() {
        return (
            <div class="clients-wrapper">
                <div>
                    <h1>We specialize in the following services</h1>
                </div>

                <div className="flex-container">
                    <div>
                        <h1>Webdesign</h1>
                        <p>Responsive and beautiful websites, like the one you're on now</p>
                    </div>
                    <div>
                        <h1>App Development</h1>
                        <p>Responsive and beautiful websites, like the one you're on now</p>
                    </div>
                    <div>
                        <h1>Custom back-end applications</h1>
                        <p>Responsive and beautiful websites, like the one you're on now</p>
                    </div>
                    <div>
                        <h1>Windows Desktop Applications</h1>
                        <p>Responsive and beautiful websites, like the one you're on now</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
