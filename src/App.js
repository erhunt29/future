import React, {Component} from 'react';
import { connect } from 'react-redux';
import SelectData from './components/SelectData/SelectData';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import InformationBlock from './components/InformationBlock/InformationBlock';
import AddStringForm from './components/AddStringForm/AddStringForm';
import {selectChunk, sortData, openInformationBlock, findString, addString} from './AC';

class App extends Component {

    state = {
        addStringFormIsOpen : false
    };

    handleOpenAddStringForm = (ev) => {
        ev.preventDefault();
        this.setState({addStringFormIsOpen: true})
    };

    render() {
        const {data, chunk, informationBlock} = this.props; //свойства
        const {selectChunk, sortData, openInformationBlock, findString, addString} = this.props; // action creators
        const {addStringFormIsOpen} = this.state;
        return (
            <div>
                {!data.isLoading && !data.array &&<SelectData/>}
                {data.isLoading && <Preloader/>}
                {data.array && (
                    <div style={{display: 'flex'}}>
                        <Search findString={findString}/>
                        <button onClick={this.handleOpenAddStringForm}>Добавить</button>
                    </div>
                )}
                {addStringFormIsOpen && <AddStringForm addString={addString}/>}
                {data.array && data.chunks.length!==0 && <Table data={data.chunks[chunk]} sortData={sortData} sort={data.sort} openInformationBlock = {openInformationBlock}/>}
                {data.array&& data.array.length > 50 && <Pagination data = {data.chunks} selectChunk={selectChunk}/>}
                {informationBlock && <InformationBlock props ={informationBlock.information}/>}
            </div>
        )
    }
};

const mapStateToProps = (store) => (
    {
        data: store.data,
        chunk: store.chunk,
        informationBlock: store.informationBlock
    });

export default connect(mapStateToProps, {selectChunk, sortData, openInformationBlock, findString, addString})(App);