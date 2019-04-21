import React from 'react';

const Pagination = ({data, selectChunk}) => {
    return (
        <div>
            {data.map((item, i) => <button onClick={()=> selectChunk(i)}>{i + 1}</button>)}
        </div>
    );
};

export default Pagination;