import React, {Component} from 'react';
import {Card} from "antd";


class CardGrid extends Component {
    render() {
        const {title, sumData, changeData = '', class_name, gridStyle, isYesterday} = this.props.data
        return (
            <Card.Grid style={gridStyle}>
                {
                    isYesterday && <span>较昨日<em className={class_name}>
                            {changeData === 0 ? ' 无变化' : `${changeData > 0 ? `+${changeData}` : `${changeData}`}`}
                    </em></span>
                }
                <span className={class_name}
                      style={{fontWeight: 600, fontSize: 27, display: 'block'}}>{sumData}</span>
                <span className='grid-bottom'>{title}</span>
            </Card.Grid>

        );
    }
}

export default CardGrid;