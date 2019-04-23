import {LOAD_DATA, SORT_DATA, SELECT_CHUNK, OPEN_INFORMATION_BLOCK, SEARCH_DATA, ADD_DATA} from '../constants'

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

export const findString = (string) => (
    {
        type: SEARCH_DATA,
        payload: {string}
    }
);

export const addString = (formData) => (
    {
        type: ADD_DATA,
        payload: {formData}
    }
);