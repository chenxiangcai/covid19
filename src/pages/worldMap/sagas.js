import {put, select} from 'redux-saga/effects'
import * as types from './action-types'
import {get} from '../../utils/http'

function* loadWorldData() {
    try {
        // 获取组件dispatch action的数据 在此可获取组件state
        const {data} = yield select(state => (state.world.action))
        const world_list = yield get(data)
        if (world_list) {
            yield put({
                type: types.LOADWORLDDATASUCCESS,
                data: {world_list}
            })
        } else {
            yield put({
                type: types.LOADERROR
            })
        }

    } catch (e) {
        yield put({})
    }
}

export {types, loadWorldData as action}