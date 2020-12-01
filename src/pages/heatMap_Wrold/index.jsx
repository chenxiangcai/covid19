import React, {Component} from 'react';
import {HeatMapWrap} from './styled'

class HeatMapPage extends Component {
    render() {
        return (
            <HeatMapWrap>
                <iframe src='http://localhost:5000'
                        title='map'
                        width={'100%'}
                        height={800}
                        style={{border: 0, borderRadius: 7}}/>

            </HeatMapWrap>
        );
    }
}

export default HeatMapPage