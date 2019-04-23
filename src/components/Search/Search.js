import React, {Component} from 'react';
import {Input, Button} from './styled';

class Search extends Component {
    state = {
        string: ''
    };

    handleChange =(ev)=> {
       this.setState({string: ev.target.value})
    };

    handleSubmit = (ev)=> {
        ev.preventDefault();
        const {findString} = this.props;
        const {string} = this.state;
        findString(string);
    };

    render() {

        const {string} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Input type="text" onChange={this.handleChange} value={string}/>
                <Button>Найти</Button>
            </form>
        );
    }
}

export default Search;