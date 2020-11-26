import {applyMiddleware, createStore} from "redux";
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'

//导入数据持久化工具 + 配置
import {persistReducer, persistStore} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import sagas from "./sagas";

import {composeWithDevTools} from "redux-devtools-extension";


const persistConfig = {
    key: 'home',
    storage: storageSession,
    // 不依赖于reducers的defaultState
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);

export const persistor = persistStore(store)

