import React, {Component} from 'react';
import {Wrap} from "./styled";

class Broadcast extends Component {
    render() {
        return (
            <Wrap>
                <div className="tabLeft">
                    <span className="leftTime">6 小时前<br></br>
                        <span style={{fontSize: 10, color: 'rgb(153, 153, 153)'}}>11-25 16:29</span>
                    </span>
                    <span className="leftDot"></span>
                    <span className="leftLine"></span>
                </div>
                <div className="tabRight">
                    <p className="topicTitle">陕西西安一男子疫情期间销售“三无”口罩 获刑五年半并支付三倍赔偿金</p>
                    <p className="topicContent">2020年1月，从事医疗器械销售的黄某在新型冠状病毒肺炎疫情暴发、市场急需口罩等防护用品时，大量购进“三无”口罩，高价销往全国多地，牟取非法利润。部分口罩被发往医疗机构和当时疫情最为严重的湖北省武汉市，让医护人员和普通民众面临可能被病毒感染、传染的严重危险。
                        11月25日，西安市中级人民法院对此案作出一审判决，被告人黄某犯销售伪劣产品罪，判处有期徒刑五年六个月，并处罚金人民币六十万元；同时责令黄某在新闻媒体上公开赔礼道歉，支付销售伪劣口罩价款的三倍赔偿金，共计人民币一百零二万六千元。</p>
                    <p className="topicFrom">信息来源：央视新闻app</p></div>
            </Wrap>
        );
    }
}

export default Broadcast;

