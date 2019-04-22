import React, {Component} from 'react';

class Search extends Component {
    state = {
        string: ''
    };
    handleChange =(ev)=> {
       this.setState({string: ev.target.value})
    };
    render() {
        const {findString} = this.props;
        const {string} = this.state;
        return (
            <form>
                <input type="text" onChange={this.handleChange} value={string}/>
                <button onClick={(ev)=> {ev.preventDefault();findString(string)}}>Найти</button>
            </form>
        );
    }
}

export default Search;