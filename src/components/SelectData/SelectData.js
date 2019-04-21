import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadData} from '../../AC'
import {urlSmall, urlBig} from '../../constants'


class SelectData extends Component {

    getData = url =>  () => {
        const {loadData} = this.props;
        loadData(url);
    };

    render() {
        const {data} = this.props;

        return (
            <div>
                {!data.array &&(
                    <div>
                        <h3>Выберете объем данных</h3>
                        <button onClick={this.getData(urlSmall)}>Маленький</button>
                        <button onClick={this.getData(urlBig)}>Большой</button>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = store => ({data: store.data});

export default connect(mapStateToProps, {loadData})(SelectData);