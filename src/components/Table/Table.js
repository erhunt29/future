import React from 'react';
import {TableElement} from './styled';
import Top from '../Top/Top';
import Row from '../Row/Row';

const Table = ({data, sortData, sort, openInformationBlock}) => {
    return (
        <TableElement>
            <tbody>
                <Top sortData={sortData} sort={sort}/>
                {data.map((item) => <Row item={item} key={item.phone} openInformationBlock={openInformationBlock}/>)}
            </tbody>
        </TableElement>
    );
};

export default Table;