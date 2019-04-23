import React, {Component} from 'react';
import {Container, GlobalStyle, Button} from './styled'
import { connect } from 'react-redux';
import SelectData from './components/SelectData/SelectData';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import InformationBlock from './components/InformationBlock/InformationBlock';
import AddStringForm from './components/AddStringForm/AddStringForm';
import {loadData, selectChunk, sortData, openInformationBlock, findString, addString} from './AC';

class App extends Component {

    state = {
        addStringFormIsOpen : false
    };

    handleOpenAddStringForm = (ev) => {
        ev.preventDefault();
        this.setState({addStringFormIsOpen: true})
    };

    render() {
        const {data, chunk, informationBlock} = this.props; // store
        const {loadData, selectChunk, sortData, openInformationBlock, findString, addString} = this.props; // action creators
        const {addStringFormIsOpen} = this.state;
        return (
            <React.Fragment>
                <GlobalStyle/>
                <Container>
                    {!data.isLoading && !data.array && <SelectData loadData={loadData}/>}

                    {data.isLoading && <Preloader/>}

                    {data.array  && (
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <Search findString={findString}/>
                            {!addStringFormIsOpen && (
                                <Button onClick={this.handleOpenAddStringForm}>Добавить</Button>
                            )}
                        </div>
                    )}
                    {data.array && data.chunks.length === 0 && <div>Совпадений не найдено </div>}

                    {addStringFormIsOpen && <AddStringForm addString={addString}/>}

                    {data.array && data.chunks.length!==0 && (
                        <Table
                            data={data.chunks[chunk]}
                            sortData={sortData}
                            sort={data.sort}
                            openInformationBlock = {openInformationBlock}
                        />
                    )}
                    {data.array&& data.array.length > 50 && (
                        <Pagination data = {data.chunks} selectChunk={selectChunk} chunk={chunk}/>
                    )}
                    {informationBlock && <InformationBlock props ={informationBlock.information}/>}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => (
    {
        data: store.data,
        chunk: store.chunk,
        informationBlock: store.informationBlock
    });

const actionCreators = {
    loadData,
    selectChunk,
    sortData,
    openInformationBlock,
    findString,
    addString
};

export default connect(mapStateToProps, actionCreators)(App);