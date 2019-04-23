import React from 'react';
import {Indicator} from './styled';

const Top = ({sortData, sort}) => {

    const checkActive = (field) => !!sort && sort.field  === field;
    const checkDirection = (field) => !sort? '▲' : sort.field !== field ? '▲' : sort.direction === 'down'? '▼' : '▲';
    const fields = [
        'id',
        'firstName',
        'lastName',
        'email',
        'phone'
    ];

    return (
        <tr>
            {fields.map( field => (
                <td onClick={()=> sortData(field)} key={field}>
                    {field}
                    <Indicator active={checkActive(field)}>
                        {checkDirection(field)}
                    </Indicator>
                </td>
            ))}
        </tr>
    );
};

export default Top;