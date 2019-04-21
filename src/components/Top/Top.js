import React from 'react';

const Top = ({sortData, sort}) => {
    return (
        <tr>
            <td onClick={()=> sortData('id')}>
                id
                <span>{!sort? '▲' : sort.field !== 'id'? '▲' : sort.direction === 'down'? '▼' : '▲'}</span>
            </td>
            <td onClick={()=> sortData('firstName')}>
                firstName
                <span>{!sort? '▲' : sort.field !== 'firstName'? '▲' : sort.direction === 'down'? '▼' : '▲'}</span>
            </td>
            <td onClick={()=> sortData('lastName')}>
                lastName
                <span>{!sort? '▲' : sort.field !== 'lastName'? '▲' : sort.direction === 'down'? '▼' : '▲'}</span>
            </td>
            <td onClick={()=> sortData('email')}>
                email
                <span>{!sort? '▲' : sort.field !== 'email'? '▲' : sort.direction === 'down'? '▼' : '▲'}</span>
            </td>
            <td onClick={()=> sortData('phone')}>
                phone
                <span>{!sort? '▲' : sort.field !== 'phone'? '▲' : sort.direction === 'down'? '▼' : '▲'}</span>
            </td>
        </tr>
    );
};

export default Top;