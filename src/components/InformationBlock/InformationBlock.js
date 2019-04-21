import React from 'react';

const InformationBlock = ({props}) => {
    const {firstName, lastName, description, address} = props;
    return (
        <div>
            Выбран пользователь <b>{firstName + ' ' + lastName}</b> <br/>
            Описание:
            <p>
                {description}
            </p>
            Адрес проживания: <b>{address.streetAddress}</b> <br/>
            Город: <b>{address.city}</b> <br/>
            Провинция/штат: <b>{address.state}</b> <br/>
            Индекс: <b>{address.zip}</b>
        </div>
    );
};

export default InformationBlock;