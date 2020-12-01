import React, {Component} from 'react';
import {Wrap} from "./styled";

const moment = require('moment')
moment.locale('zh-cn')

class Broadcast extends Component {
    render() {
        let ary = this.props.data;
        return (
            <>
                {ary !== null &&
                ary.map((item, index) => {
                    return (
                        <Wrap key={index}>
                            <div className="tabLeft">
                                    <span className="leftTime">{item.pubDateStr}<br></br>
                                        <span style={{
                                            fontSize: 10,
                                            color: 'rgb(153, 153, 153)'
                                        }}>{moment(item.pubDate).format('MM-DD HH:mm')}
                                        </span>
                                    </span>
                                <span className="leftDot"></span>
                                <span className="leftLine"></span>
                            </div>
                            <div className="tabRight">
                                {
                                    index === 0 &&
                                    <span className='isLatest' dangerouslySetInnerHTML={{__html: '最新'}}></span>
                                }
                                <span className="topicTitle">{item.title}</span>
                                <p className="topicContent"><a href={item.sourceUrl}>{item.summary}</a></p>
                                <p className="topicFrom">信息来源：{item.infoSource}</p>
                            </div>
                        </Wrap>
                    )
                })
                }
            </>
        );
    }
}

export default Broadcast;

