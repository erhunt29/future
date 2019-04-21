import React from 'react';
import { connect } from 'react-redux'
import SelectData from './components/SelectData/SelectData'
import Preloader from './components/Preloader/Preloader'

const App = ({data}) => {
    return (
        <div>
            <SelectData/>
            {data.isLoading && (<Preloader/>)}
        </div>
)
    ;
};

const mapStateToProps = (store) => ({data: store.data});

export default connect(mapStateToProps)(App);