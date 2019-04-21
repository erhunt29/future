import React from 'react';

const Row = ({item, openInformationBlock}) => {
    return (
        <tr onClick={() => {openInformationBlock(item)}}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    );
};

export default Row;