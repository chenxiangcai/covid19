import React, {Component} from 'react';
import {HeatmapLayer, Scene} from '@antv/l7';
import {GaodeMap} from '@antv/l7-maps';


class HeatMap extends Component {

    state = {
        id: new Date().getTime().toString(),
        scene: null,
        layer: null
    }

    componentDidMount() {
        const scene = new Scene({
            id: this.state.id,
            map: new GaodeMap({
                style: 'dark',
                pitch: 0,
                center: [127.5671666579043, 7.445038892195569],
                zoom: 2.632456779444394,
            })
        });
        scene.on('loaded', () => {
            // 请求数据
            fetch(
                'http://localhost/world_heart_map'
            )
                .then(res => res.json())
                .then(data => {
                    // 创建图层
                    this.layer = new HeatmapLayer({})
                        .source(data)
                        .shape('heatmap')
                        .size('confirm') // weight映射通道
                        .style({
                            intensity: 2,
                            radius: 20,
                            opacity: 1.0,
                            rampColors: {
                                colors: [
                                    '#FF4818',
                                    '#F7B74A',
                                    '#FFF598',
                                    '#91EABC',
                                    '#2EA9A1',
                                    '#206C7C'
                                ].reverse(),
                                positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
                            }
                        })

                    // 添加图层
                    // 调用场景的 addLayer 函数，给底图添加图层
                    scene.addLayer(this.layer)
                })
        })
    }

    render() {
        return (
            <div id={this.state.id}></div>
        );
    }
}

export default HeatMap;