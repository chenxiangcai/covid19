import React, {Component} from 'react';
import {Card, message, Tabs} from "antd";
import {HomeWrap} from "./styledHome";
import ChinaCharts from "../../components/EchartChinaChart";
import {connect} from "react-redux";
import {LOADDATA} from "./action-types";
import {BROADCAST, CHINAAPI, COUNTCHINA} from "../../common/api";
import {renderMapChart} from "../../utils/renderChinaMap";
import Loading from "../../components/Loading";
import CardGrid from "../../components/CardGrid";
import Broadcast from "../../components/Broadcast";
import DocumentTitle from 'react-document-title'

const {TabPane} = Tabs;

//Card样式
const gridStyle = {
    width: '16.666%',
    textAlign: 'center',
    fontSize: 17,
    padding: 10
};
const headStyle = {
    color: '#f8b500',
    fontSize: 24,
    fontWeight: 800
}

// 连接redux的状态和方法
const mapState = state => ({
    data: state.home.data,
    detailData: state.home.detailData,
    nowData: state.home.nowData,
    loading: state.home.loading,
    broadcast: state.home.broadcast,
    isError: state.home.isError,
})
const mapDispatch = dispatch => ({
    loadData() {
        dispatch({
            type: LOADDATA,
            data: {
                CHINAAPI,
                COUNTCHINA,
                BROADCAST
            }
        })
    }
})


//连接store
@connect(mapState, mapDispatch)


class Home extends Component {

    componentDidMount() {
        // 仅第一次页面加载请求数据
        if (this.props.data.length === 0) this.props.loadData()
        this.props.isError && message.warning('出错啦！网络暂时堵塞中 ···')
    }


    render() {
        const {data, detailData, nowData, loading, broadcast} = this.props
        return (
            <DocumentTitle title='首页'>
                <HomeWrap>
                    <Loading loading={loading}/>
                    <Card title="国内疫情数据"
                          headStyle={headStyle}
                          extra={
                              <span style={{
                                  color: '#aaa',
                                  fontSize: 14
                              }}>截至北京时间：{detailData && (detailData.updateTime)}</span>
                          }
                    >
                        {
                            detailData && <CardGrid data={
                                {
                                    sumData: detailData.confirmedCount,
                                    changeData: detailData.confirmedAdd,
                                    title: '累计确诊',
                                    class_name: 'no1',
                                    isYesterday: true,
                                    gridStyle,
                                }
                            }/>
                        }

                        {
                            detailData && <CardGrid data={
                                {
                                    sumData: detailData.currentConfirmedCount,
                                    changeData: detailData.currentConfirmedAdd,
                                    title: '现存确诊',
                                    class_name: 'no7',
                                    isYesterday: true,
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            detailData && <CardGrid data={
                                {
                                    sumData: detailData.suspectedCount,
                                    changeData: detailData.suspectedAdd,
                                    title: '境外输入',
                                    class_name: 'no4',
                                    isYesterday: true,
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            detailData && <CardGrid data={
                                {
                                    sumData: detailData.severecasesCount,
                                    changeData: detailData.severecasesAdd,
                                    title: '现存无症状',
                                    class_name: 'no5',
                                    isYesterday: true,
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            detailData && <CardGrid data={
                                {
                                    sumData: detailData.deadCount,
                                    changeData: detailData.deathAdd,
                                    title: '累计死亡',
                                    class_name: 'no3',
                                    isYesterday: true,
                                    gridStyle
                                }
                            }/>
                        }

                        <Card.Grid style={gridStyle}>
                            {
                                detailData &&
                                <span>较昨日<em
                                    className='no2'>
                                {detailData['curedAdd'] === 0 ? ' 无变化' : `${detailData.curedAdd > 0 ? `+${detailData.curedAdd}` : `${detailData.curedAdd}`}`}</em></span>
                            }
                            <div className='num no2'>{detailData && (detailData.curedCount)}</div>
                            <span className='grid-bottom'>累计治愈</span>
                        </Card.Grid>
                    </Card>

                    <div className='border '>
                        <div className='chinaMapTitle'>国内疫情地图</div>

                        <Tabs animated style={{marginLeft: 20}} defaultActiveKey="1">
                            <TabPane tab="现存确诊" key="1">
                                {/*判断异步数据是否已经加载*/}
                                {
                                    nowData.length > 0 &&
                                    <ChinaCharts title='现存确诊地图' option={renderMapChart(nowData)}/>
                                }
                            </TabPane>
                            <TabPane tab="累计确诊" key="2">
                                {
                                    data.length > 0 &&
                                    <ChinaCharts title='累计确诊地图' option={renderMapChart(data)}/>
                                }
                            </TabPane>
                        </Tabs>
                        <div className='desc'>{detailData && detailData.sourceDesc}</div>
                    </div>

                    <Card className='bottom20' title="实时播报" headStyle={headStyle}>
                        <Broadcast data={broadcast}/>
                        <p className='shadow'/>
                    </Card>
                </HomeWrap>
            </DocumentTitle>
        );
    }
}

export default Home;