import {SELECT_CHUNK} from '../constants';
const initialStore = 0;

export default (defaultStore = initialStore, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_CHUNK:
            return payload.number
    }

    return defaultStore
}