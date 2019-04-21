import React from 'react';
import Top from '../Top/Top';
import Row from '../Row/Row';

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <Top/>
                {data.map((item) => <Row item={item} key={item.phone}/>)}
            </tbody>
        </table>
    );
};

export default Table;