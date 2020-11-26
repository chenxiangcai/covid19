/*
import {LOADCHINADATA, LOADDSUCCESS} from './action-types'

//中国地图组件 默认状态
const defaultState = {
    data: [],
    loading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOADCHINADATA :
            return {
                ...state, action,
                loading: true
            };
        case LOADDSUCCESS:
            return {
                ...state,
                data: action.data.China_list,
                loading: false
            }

        default:
            return state;
    }
};*/
