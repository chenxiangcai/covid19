import './App.css';
import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {projectRoutes} from './routes'
import 'antd/dist/antd.css'
import Frame from './components/Frame'
import {Provider} from "react-redux";
import {persistor, store} from "./redux";

// 导入数据持久化包
import {PersistGate} from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Frame>
                        <Switch>
                            {
                                projectRoutes.map(item => {
                                    return <Route key={item.path} {...item}/>
                                })
                            }
                            <Redirect from='/' to={projectRoutes[0].path}/>
                            <Redirect to='/404'/>
                        </Switch>
                    </Frame>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
