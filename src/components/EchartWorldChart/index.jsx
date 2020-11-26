import React, {Component} from 'react';
import echarts from 'echarts'
import 'echarts/map/js/world'


class WorldCharts extends Component {
    state = {
        id: new Date().getTime().toString(),
        data: []
    }

    componentDidMount() {
        let mecharts = echarts.init(document.getElementById(this.state.id))
        const option = {
            ...this.props.option,
            title: {
                text: this.props.title,
                textAlign: 'center',
                left: '50%',
                top: 0
            }
        }
        mecharts.setOption(option)
        window.onresize = function () {
            mecharts.resize();
        }
    }

    render() {
        return (
            <div id={this.state.id} style={{
                display: 'block', width: '100%',
                height: '550px', textAlign: 'center',
            }}/>
        );
    }
}

export default WorldCharts;