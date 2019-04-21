import React from 'react';
import { connect } from 'react-redux';
import SelectData from './components/SelectData/SelectData';
import Preloader from './components/Preloader/Preloader';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import {selectChunk, sortData} from './AC';

const App = ({data, chunk, selectChunk, sortData}) => {
    return (
        <div>
            <SelectData/>
            {data.isLoading && (<Preloader/>)}
            {data.array && (<Table data={data.chunks[chunk]} sortData={sortData} sort={data.sort}/>)}
            {data.array&& data.array.length > 50 && (<Pagination data = {data.chunks} selectChunk={selectChunk}/>)}
        </div>
)
    ;
};

const mapStateToProps = (store) => (
    {
        data: store.data,
        chunk: store.chunk
    });

export default connect(mapStateToProps,{selectChunk, sortData})(App);