/*
* @name: 中间件saga监听事件文件
* @description: 监听并匹配组件dispatch分发的action动作类型
* @author:
* @time: 2020-11-20 22:49:37
*/

import {put, select} from 'redux-saga/effects'
import * as types from './action-types'
import {get} from '../../utils/http'

function* loadData() {
    try {
        // 获取组件dispatch action的数据 在此可获取组件state
        const {data} = yield select(state => (state.home.action))
        const China_list = yield get(data.CHINAAPI)
        const China_detail = yield get(data.COUNTCHINA)
        const broadcast_list = yield get(data.BROADCAST)

        // 从所有中国确诊数据中筛选现存确诊数据
        const nowData = China_list.map(item => ({
            'currentConfirmedCount': item.currentConfirmedCount,
            'provinceShortName': item.provinceShortName,
        }))

        // 获取成功 发送成功的action
        if (China_list && China_detail) {
            yield put({
                type: types.LOADDSUCCESS,
                data: {
                    China_list, China_detail, nowData, broadcast_list
                }
            })
        } else {
            yield put({
                type: types.LOADERROR
            })
        }

    } catch (e) {
        yield put({
            type: types.LOADERROR
        })
    }
}

export {types, loadData as action}