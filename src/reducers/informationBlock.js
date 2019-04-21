import {OPEN_INFORMATION_BLOCK} from '../constants';

const initialStore = null;

export default (defaultStore = initialStore, action) => {
    const {type, payload} = action;

    switch (type) {
        case OPEN_INFORMATION_BLOCK:
            return {...defaultStore, information: payload.item}
    }

    return defaultStore;
}