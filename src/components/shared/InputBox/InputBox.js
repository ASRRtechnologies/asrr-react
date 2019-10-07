import React, {Component} from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react'

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
            <div style={{width:"100%"}}>
                <Form fluid>
                    <Form.Field required >
                        <label>First Name</label>
                        <input placeholder='first name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='last name' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Email</label>
                        <input placeholder='email' />
                    </Form.Field>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label=''
                        placeholder='message'
                    />
                </Form>
            </div>
        );
    }
}

export default InputBox;
