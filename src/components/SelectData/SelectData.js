import React from 'react';
import {urlSmall, urlBig} from '../../constants'
import {Wrapper, Heading, Button} from './styled'


const SelectData = ({loadData}) =>  (
    <Wrapper>
        <Heading>Выберете объем данных</Heading>
        <Button
            onClick={() => loadData(urlSmall)}
            first
        >
            Маленький
        </Button>
        <Button
            onClick={() => loadData(urlBig)}
        >
            Большой
        </Button>
    </Wrapper>
);


export default SelectData;