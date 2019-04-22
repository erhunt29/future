import React from 'react';
import { connect } from 'react-redux';
import SelectData from './components/SelectData/SelectData';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import InformationBlock from './components/InformationBlock/InformationBlock';
import {selectChunk, sortData, openInformationBlock, findString} from './AC';

const App = ({data, chunk, informationBlock,selectChunk, sortData, openInformationBlock, findString}) => {
    return (
        <div>
            {!data.isLoading && !data.array &&<SelectData/>}
            {data.isLoading && <Preloader/>}
            {data.array && <Search findString={findString}/>}

            {data.array && data.chunks.length!==0 && <Table data={data.chunks[chunk]} sortData={sortData} sort={data.sort} openInformationBlock = {openInformationBlock}/>}
            {data.array&& data.array.length > 50 && <Pagination data = {data.chunks} selectChunk={selectChunk}/>}
            {informationBlock && <InformationBlock props ={informationBlock.information}/>}
        </div>
)
    ;
};

const mapStateToProps = (store) => (
    {
        data: store.data,
        chunk: store.chunk,
        informationBlock: store.informationBlock
    });

export default connect(mapStateToProps, {selectChunk, sortData, openInformationBlock, findString})(App);