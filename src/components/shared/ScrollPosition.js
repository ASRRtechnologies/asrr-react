import React, {Component} from 'react';
import {withScroll} from "../shared/withScroll";


class ScrollPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            names: [],
            currentName: [],
        };
    }


    getScrollData = () => {
        //Get data
        this.setState({data: this.props.data});
        let data = Object.entries(this.state.data);
        this.checkElementsPosition(data)

    };

    checkElementsPosition = (data) => {
        let names = [];

        for (let x = 0; x < data.length; x++) {
            names.push(data[x][0]);
        }


        for (let i = 0; i < data.length; i++) {
            //Check if element is in screen
            if (data[i][1].elementPos < 100 && data[i][1].elementPos > (-0.8 * data[i][1].elementHeight)) {
                // console.log(`${data[i][0]} is in the screen`);
                //Set current name
                this.setState({currentName:data[i][0]});
            }
            this.checkIfIndexExists(data, i, names.length);
        }
     };

    checkIfIndexExists = (data, i, numNames) => {
        let names = [];
        let number;
        if(numNames > 3){number = 3;}
        else{number=2;}

        for ( let x = 0; x < number; x++){
            if (typeof data[i - 1] === 'undefined') {
                names.push(data[i + x][0]);
            }
            // // Check if element is last in list
            else if (typeof data[i + 1] === 'undefined') {
                names.push(data[i - x][0]);
            }
        }
        this.setState({names:names});
        console.log(this.state);
        // // If element minus 1 is undefined then this is first in list
        // if (typeof data[i - 1] === 'undefined') {
        //     this.setState({names: [data[i][0], data[i + 1][0], data[i] + 2[0]], currentName: data[i][0]})
        // }
        // // Check if element is last in list
        // else if (typeof data[i + 1] === 'undefined') {
        //     this.setState({names: [data[i - 2][0], data[i - 1][0], data[i][0]], currentName: data[i][0]})
        // }
    };


    componentDidMount() {
        window.addEventListener("scroll", this.getScrollData)
    }

    render() {
        return (
            <div className="scroll-nav-container">
                <p></p>

            </div>
        );
    }
}

ScrollPosition.propTypes = {};

export default withScroll(ScrollPosition);
