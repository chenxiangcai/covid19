import React, {Component} from 'react';

class HeartMapChina extends Component {
    render() {
        return (
            <div>
                <iframe src='http://localhost/heartmapofchina'
                        title='map'
                        width={'100%'}
                        height={800}
                        style={{border: 0, borderRadius: 7}}/>
            </div>
        );
    }
}

export default HeartMapChina;