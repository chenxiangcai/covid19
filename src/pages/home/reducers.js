/*
* @name: 更新state文件
* @description: 在此更新组件sate 并向前台发送更新后的状态
* @author:
* @time: 2020-11-20 22:47:15
*/

import {LOADDATA, LOADDSUCCESS, LOADERROR} from './action-types'

//home组件 默认状态
const defaultState = {
    data: [],
    nowData: [],
    broadcast: null,
    detailData: null,
    loading: false,
    isError: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOADDATA :
            return {
                ...state, action,
                loading: true
            };
        case LOADDSUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data.China_list,
                detailData: action.data.China_detail,
                nowData: action.data.nowData,
                broadcast: action.data.broadcast_list
            }
        case LOADERROR: {
            return {
                ...state,
                loading: true,
                isError: true
            }
        }
        default:
            return state;
    }
};