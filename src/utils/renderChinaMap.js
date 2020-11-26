export const renderMapChart = (data) => {

    //根据传值渲染不同数据
    if (data[0].suspectedCount === undefined) {
        const newData = data.map(item => (
            {
                'name': item.provinceShortName,
                'value': item.currentConfirmedCount,
            }))
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (params.data === undefined) {
                        return `数据: 暂无`
                    } else {
                        return `
                       省份: ${params['name']}<br/>
                    现存确诊: ${params['data'].value}<br/>
                    `
                    }
                }
            },
            series: [{
                type: 'map',
                map: 'china',
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12
                },
                zoom: 1.2,
                itemStyle: {
                    areaColor: '#fff'
                },
                data: newData
            }],
            visualMap: [{
                type: 'piecewise',
                show: true,
                pieces: [{min: 100}, // 不指定 max，表示 max 为无限大（Infinity）。
                    {min: 50, max: 99},
                    {min: 10, max: 49},
                    {min: 1, max: 9},
                    /*  {min: 1, max: 9, label: '10 到 200（自定义label）'},*/
                    {value: 0, label: '0'}, // 表示 value 等于 123 的情况。
                ],
                align: 'right',
                //orient: 'horizontal'
            }]
        }
        return option
    } else {
        const newData = data.map(item => (
            {
                'name': item.provinceShortName,
                'value': item.confirmedCount,
                'currentConfirmedCount': item.currentConfirmedCount,
                'deadCount': item.deadCount,
                'curedCount': item.curedCount,
                'suspectedCount': item.suspectedCount
            }))
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (params.data === undefined) {
                        return `数据: 暂无`
                    } else {
                        return `
                       省份: ${params['name']}<br/>
                    累计确诊: ${params['data'].value}<br/>
                    现存确诊: ${params['data'].currentConfirmedCount}<br/>
                    死亡人数: ${params['data'].deadCount}<br/>
                    治愈人数: ${params['data'].curedCount}<br/>
                    疑似病例: ${params['data'].suspectedCount}<br/>
                    `
                    }
                }
            },
            series: [{
                type: 'map',
                map: 'china',
                label: {
                    show: true,
                    color: '#000',
                    fontSize: 12
                },
                zoom: 1.2,
                itemStyle: {
                    areaColor: '#fff'
                },
                data: newData
            }],
            visualMap: [{
                type: 'piecewise',
                show: true,
                pieces: [{min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
                    {min: 1000, max: 10000},
                    {min: 500, max: 999},
                    {min: 100, max: 499},
                    {min: 10, max: 99},
                    /*  {min: 1, max: 9, label: '10 到 200（自定义label）'},*/
                    // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                    {max: 5}],
                align: 'right',
                //orient: 'horizontal'
            }]
        }
        return option
    }
}