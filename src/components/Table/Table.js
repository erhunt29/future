import React from 'react';
import Top from '../Top/Top';
import Row from '../Row/Row';

const Table = ({data, sortData, sort}) => {
    return (
        <table>
            <tbody>
                <Top sortData={sortData} sort={sort}/>
                {data.map((item) => <Row item={item} key={item.phone}/>)}
            </tbody>
        </table>
    );
};

export default Table;