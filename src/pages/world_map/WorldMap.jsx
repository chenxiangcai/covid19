import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, message} from "antd";
import {LOADWORLDDATA} from "./action-types";
import {WORLDAPI} from "../../common/api";
import WorldCharts from "../../components/EchartWorldChart";
import {renderWorldChart} from "../../utils/renderWorldMap";
import {WorldMapWrap} from "./styledWorldMap";
import Loading from "../../components/Loading";
import CardGrid from "../../components/CardGrid";
import DocumentTitle from 'react-document-title'

const moment = require('moment')
moment.locale('zh-cn')

const headStyle = {
    color: '#f8b500',
    fontSize: 24,
    fontWeight: 800
}
const gridStyle = {
    width: '16.6666%',
    textAlign: 'center',
    fontSize: 17,
    padding: 10
};

const mapState = state => ({
    data: state.world.data,
    loading: state.world.loading,
    isError: state.world.isError,
})
const mapDispatch = dispatch => ({
    loadWorldData() {
        dispatch({
            type: LOADWORLDDATA,
            data: WORLDAPI
        })
    }
})


//连接store
@connect(mapState, mapDispatch)
class WorldMap extends Component {
    componentDidMount() {
        if (this.props.data.length === 0) this.props.loadWorldData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== prevState) {
            this.props.isError && message.warning('出错啦！网络暂时堵塞中 ···')
        }
    }

    render() {
        const {data, loading} = this.props
        const {Date, Global} = data
        const localDate = moment(Date).format('YYYY-MM-DD HH:mm:ss')
        return (
            <DocumentTitle title='全球疫情地图'>
                <WorldMapWrap>
                    <Loading loading={loading}/>
                    <Card title="全球疫情数据"
                          headStyle={headStyle}
                          extra={
                              <span style={{color: '#aaa', fontSize: 14}}>截至北京时间：{data && localDate}</span>
                          }
                    >
                        {
                            Global && <CardGrid style={{width: '33.3333%'}} data={
                                {
                                    sumData: Global.TotalConfirmed,
                                    title: '累计确诊',
                                    class_name: 'no1',
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            Global && <CardGrid data={
                                {
                                    sumData: Global.NewConfirmed,
                                    title: '新增确诊',
                                    class_name: 'no1',
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            Global && <CardGrid data={
                                {
                                    sumData: Global.TotalDeaths,
                                    title: '累计死亡',
                                    class_name: 'no3',
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            Global && <CardGrid data={
                                {
                                    sumData: Global.NewDeaths,
                                    title: '新增死亡',
                                    class_name: 'no3',
                                    gridStyle
                                }
                            }/>
                        }

                        {
                            Global && <CardGrid data={
                                {
                                    sumData: Global.TotalRecovered,
                                    title: '累计治愈',
                                    class_name: 'no2',
                                    gridStyle
                                }
                            }/>
                        }

                        <Card.Grid style={gridStyle}>
                            {
                                Global &&
                                <div style={{height: '100%'}}>
                                    <div className='num no2'>{Global.NewRecovered}</div>
                                    <span className='grid-bottom'>新增治愈</span>
                                </div>
                            }
                        </Card.Grid>

                    </Card>

                    <div className='world_map_title'>
                        全球疫情分布图
                    </div>

                    <div>
                        {
                            data.toString().length > 0 &&
                            <WorldCharts title='' option={renderWorldChart(data)}/>
                        }
                    </div>
                </WorldMapWrap>
            </DocumentTitle>
        );
    }
}

export default WorldMap;