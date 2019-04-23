import React, {Component} from 'react';
import {Form, Input, Button} from './styled'
class AddStringForm extends Component{

    state = {

    };

    handleSubmit = ev => {
        ev.preventDefault();
        const {addString} = this.props;
        const formData = {...this.state};
        addString(formData)
    };

    handleChange = ev => {
      const field = ev.target.id;
      this.setState({[field]: ev.target.value})
    };

    render() {
        console.log(this.state);
        return (
            <Form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id'>id</label>
                    <Input id='id' type='text' required onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='firstName'>firstName</label>
                    <Input id='firstName' type='text' required onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='lastName'>lastName</label>
                    <Input id='lastName' type='text' required onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='email'>email</label>
                    <Input id='email' type='email' required onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor='phone'>phone (123)456-7890 </label>
                    <Input id='phone' type='tel' required pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
                </div>

                <Button>Добавить</Button>
            </Form>
        );
    }
};

export default AddStringForm;