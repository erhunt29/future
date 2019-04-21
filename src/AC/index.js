import {LOAD_DATA, SORT_DATA, SELECT_CHUNK, OPEN_INFORMATION_BLOCK} from '../constants'

export const loadData = (url) => (
    {
        type: LOAD_DATA,
        callAPI: url
    }
);

export const selectChunk = (number) => (
    {
        type: SELECT_CHUNK,
        payload: {number}
    }
);

export const sortData = (field) => (
    {
        type: SORT_DATA,
        payload: {field}
    }
);

export const openInformationBlock = (item) => (
    {
        type: OPEN_INFORMATION_BLOCK,
        payload: {item}

    }
);