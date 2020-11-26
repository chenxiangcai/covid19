import {LOADWORLDDATA, LOADWORLDDATASUCCESS} from './action-types'


const defaultState = {
    data: [],
    loading: false
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
        default:
            return state;
    }
};