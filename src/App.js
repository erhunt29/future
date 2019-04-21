import React from 'react';
import { connect } from 'react-redux';
import SelectData from './components/SelectData/SelectData';
import Preloader from './components/Preloader/Preloader';
import Table from './components/Table/Table';

const App = ({data}) => {
    return (
        <div>
            <SelectData/>
            {data.isLoading && (<Preloader/>)}
            {data.array && (<Table data={data.array}/>)}
            {data.array && (<Pagination length = {data.array}/>)}
        </div>
)
    ;
};

const mapStateToProps = (store) => ({data: store.data});

export default connect(mapStateToProps)(App);