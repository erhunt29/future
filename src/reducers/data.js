import {LOAD_DATA, START, SUCCESS} from '../constants';

const initialStore = {
    isLoading: false,
    array: null
};

export default (defaultStore = initialStore, action) => {
    const {type, payload, response} = action;

    switch (type) {

        case LOAD_DATA + START:
            return Object.assign({}, defaultStore, {isLoading: true});

        case LOAD_DATA + SUCCESS:
            return Object.assign({}, defaultStore, {isLoading: false, array: response});
    }

    return defaultStore

}