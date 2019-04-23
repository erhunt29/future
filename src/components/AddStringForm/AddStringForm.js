import React, {Component} from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id'>id</label>
                    <input id='id' type='text' required onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='firstName'>firstName</label>
                    <input id='firstName' type='text' required onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='lastName'>lastName</label>
                    <input id='lastName' type='text' required onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='email'>email</label>
                    <input id='email' type='email' required onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor='phone'>phone (123)456-7890 </label>
                    <input id='phone' type='tel' required pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}" onChange={this.handleChange}/>
                </div>

                <button>Добавить</button>
            </form>
        );
    }
};

export default AddStringForm;