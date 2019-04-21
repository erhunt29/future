import {LOAD_DATA, START, SUCCESS, FAIL} from '../constants';

const initialStore = {
    isLoading: false,
    array: null
};

export default (defaultStore = initialStore, action) => {
    const {type, payload, response, error} = action;

    switch (type) {

        case LOAD_DATA + START:
            return {...defaultStore, isLoading: true};

        case LOAD_DATA + SUCCESS:
            return {...defaultStore, isLoading: false, array: response};

        case LOAD_DATA + FAIL:
            console.log(error);
            return {...defaultStore, isLoading: 'error'};
    }

    return defaultStore

}