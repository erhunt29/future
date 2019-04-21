import {LOAD_DATA, START, SUCCESS, FAIL, SORT_DATA} from '../constants';
import {splitArr, sortArrayByField} from "../helpers";

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
            return {...defaultStore, isLoading: false, array: response, chunks: splitArr(response, 50)};

        case LOAD_DATA + FAIL:
            console.log(error);
            return {...defaultStore, isLoading: 'error'};

        case SORT_DATA:
            const {array, sort} = defaultStore;
            const {sortableArray, direction} = sortArrayByField(array, payload.field, sort);

            return {
                ...defaultStore,
                array: sortableArray,
                chunks: splitArr(sortableArray, 50),
                sort: {
                    field:  payload.field,
                    direction
                }
            }
    }

    return defaultStore

}