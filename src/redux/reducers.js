import {combineReducers} from "redux";
//引入各个组件的数据
import {reducers as home} from "../pages/home";
import {reducers as world} from '../pages/worldMap'
// 数据整合导出
export default combineReducers({
    home,world
});