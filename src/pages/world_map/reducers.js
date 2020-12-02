import {LOADERROR, LOADWORLDDATA, LOADWORLDDATASUCCESS} from './action-types'


const defaultState = {
    data: [],
    loading: false,
    isError: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOADWORLDDATA:
            return {
                ...state, action,
                loading: true
            };
        case LOADWORLDDATASUCCESS:
            return {
                ...state,
                data: action.data.world_list,
                loading: false
            }
        case LOADERROR: {
            return {
                ...state,
                isError: true,
                loading: true
            }
        }
        default:
            return state;
    }
};