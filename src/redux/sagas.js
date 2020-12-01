/*
* @name: react-redux saga总监听模块
* @description: 此文件在程序中注入中间件，用于各个文件的saga监听，并执行其相关的action
* @author:
* @time: 2020-11-21 14:19:23
*/
import {takeEvery} from "redux-saga/effects";
import {sagas as home} from "../pages/home/";
import {sagas as world} from '../pages/world_map/'

let {LOADDATA} = home.types;
let {LOADWORLDDATA} = world.types;

function* sagas() {
    console.log(1)
    // 监听action
    yield takeEvery(LOADDATA, home.action);
    yield takeEvery(LOADWORLDDATA, world.action)
}

export default sagas;