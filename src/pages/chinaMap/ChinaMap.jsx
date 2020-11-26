import React, {Component} from 'react';
import ChinaCharts from "../../components/EchartChinaChart";
import {connect} from "react-redux";
import {renderMapChart} from "../../utils/renderChinaMap";
import {ChinaMapWrap} from "./styledChinaMap";

const mapState = state => ({
    data: state.home.data,
    detailData: state.home.detailData
})

@connect(mapState)

class ChinaMap extends Component {
    render() {
        const {data} = this.props
        const {detailData} = this.props
        return (
            <ChinaMapWrap>
                <div style={{marginTop: 20}}>
                    {
                        data.length > 0 &&
                        <ChinaCharts title='全国疫情分布图' option={renderMapChart(data)}/>
                    }
                </div>
                <div className='desc'>{detailData.description}</div>
            </ChinaMapWrap>
        );
    }
}

export default ChinaMap;