import React from 'react';
import { Button, Wrapper } from './styled'

const Pagination = ({data, selectChunk, chunk}) => {
    return (
        <Wrapper>
            {data.map((item, i) => (
                <Button
                    onClick={()=> selectChunk(i)}
                    key={item[0].phone}
                    active = {chunk === i}
                >
                    {i + 1}
                </Button>
            ))}
        </Wrapper>
    );
};

export default Pagination;