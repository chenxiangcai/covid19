import React, {Component} from 'react';
import {HeatMapWrap} from './styled'
import DocumentTitle from 'react-document-title'

class HeatMapPage extends Component {
    render() {
        return (
            <DocumentTitle title='全球疫情热力图'>
                <HeatMapWrap>
                    <iframe src='http://localhost/heartmapofworld'
                            title='map'
                            width={'100%'}
                            height={800}
                            style={{border: 0, borderRadius: 7}}/>
                </HeatMapWrap>
            </DocumentTitle>
        );
    }

}

export default HeatMapPage