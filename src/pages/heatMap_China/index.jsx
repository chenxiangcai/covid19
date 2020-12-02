import React, {Component} from 'react';
import DocumentTitle from 'react-document-title'

class HeartMapChina extends Component {
    render() {
        return (
            <DocumentTitle title='国内疫情热力图'>
                <iframe src='http://localhost/heartmapofchina'
                        title='map'
                        width={'100%'}
                        height={800}
                        style={{border: 0, borderRadius: 7}}/>
            </DocumentTitle>
        );
    }
}

export default HeartMapChina;