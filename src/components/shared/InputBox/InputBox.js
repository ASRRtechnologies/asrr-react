import React, {Component} from 'react';

class InputBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            message:"",
            value: '',
            rows: 5,
            minRows: 5,
            maxRows: 10,
        };
    }

    handleChange = (event) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };

    handleMail = (e, name) => {
        this.props.getValue(name, e.target.value)

        // this.setState({[name]:e.target.value}, () => {
        // });
    }



    render() {
        return (
            <div style={{width:"100%", marginTop:"30px"}}>
                <label className="field a-field a-field_a3">
                    <input className="field__input a-field__input" placeholder={this.props.placeholder} onChange={e => this.handleMail(e, this.props.name)} required/>
                    <span className="a-field__label-wrap">
                    <span className="a-field__label">{this.props.title}</span>
                    </span>
                </label>
            </div>
        );
    }
}

export default InputBox;
