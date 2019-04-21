import {LOAD_DATA} from '../constants'

export const loadData = (url) => (
    {
        type: LOAD_DATA,
        callAPI: url
    }
);