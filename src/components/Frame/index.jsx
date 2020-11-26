import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {withRouter} from "react-router-dom";
import {HeatMapOutlined, RadarChartOutlined, UnorderedListOutlined,} from '@ant-design/icons';
import {getStore, setStore} from "../../utils/storage";


const {Header, Content, Footer} = Layout;

class Index extends Component {

    // add 路由跳转
    toggleRoute = path => {
        this.props.history.push(path)
    }
    // fixed 页面刷新后导航栏组件选择丢失问题（即恢复到默认key）
    fixKey = key => {
        setStore('navigation_bar_key', key)
    }

    render() {
        const getKey = getStore('navigation_bar_key')
        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 7, width: '100%'}}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={getKey == null ? ['/covid19'] : [`${getKey}`]}
                    >
                        <Menu.Item key="/covid19"
                                   icon={<UnorderedListOutlined/>}
                                   onClick={({key}) => {
                                       this.toggleRoute(key)
                                       this.fixKey(key)
                                   }}
                        >综合信息</Menu.Item>
                        <Menu.Item
                            key="/covid19/China"
                            icon={<HeatMapOutlined/>}
                            onClick={({key}) => {
                                this.toggleRoute(key)
                                this.fixKey(key)
                            }}>全国疫情图</Menu.Item>
                        <Menu.Item
                            key="/covid19/World"
                            icon={<RadarChartOutlined/>}
                            onClick={({key}) => {
                                this.toggleRoute(key)
                                this.fixKey(key)
                            }}
                        >全球疫情图</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '32px 50px', marginTop: 64}}>
                    <div className="site-layout-background " style={{padding: 24, minHeight: 857}}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', marginTop: -50}}>© 2020 Group No2. All rights reserved.</Footer>
            </Layout>
        );
    }
}

export default withRouter(Index);