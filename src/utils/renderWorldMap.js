export const renderWorldChart = (data) => {
    const {Countries} = data
    if (Countries) {
        if (Countries.some(item => item.Country === "United States of America")) {
            // fixed echarts与接口 国家名字不匹配
            const Usa = Countries.find(item => (item.Country === "United States of America"))
            Usa.Country = 'United States'
            const Russian = Countries.find(item => (item.Country === "Russian Federation"))
            Russian.Country = "Russia"
            const Korea = Countries.find(item => (item.Country === "Korea (South)"))
            Korea.Country = "Korea"
            const Iran = Countries.find(item => (item.Country === "Iran, Islamic Republic of"))
            Iran.Country = "Iran"
            const Congo = Countries.find(item => (item.Country === "Congo (Kinshasa)"))
            Congo.Country = "Dem. Rep. Congo"
            const Congo2 = Countries.find(item => (item.Country === "Congo (Brazzaville)"))
            Congo2.Country = "Congo"
            const Tanzania = Countries.find(item => (item.Country === "Tanzania, United Republic of"))
            Tanzania.Country = "Tanzania"
            const SouthSudan = Countries.find(item => (item.Country === "South Sudan"))
            SouthSudan.Country = "S. Sudan"
            const CentralAfrican = Countries.find(item => (item.Country === "Central African Republic"))
            CentralAfrican.Country = "Central African Rep."
            const VietNam = Countries.find(item => (item.Country === "Viet Nam"))
            VietNam.Country = "Vietnam"
            const DominicanRepublic = Countries.find(item => (item.Country === "Dominican Republic"))
            DominicanRepublic.Country = "Dominican Rep."
            const CzechRepublic = Countries.find(item => (item.Country === "Czech Republic"))
            CzechRepublic.Country = "Czech Rep."
            const Venezuela = Countries.find(item => (item.Country === "Venezuela (Bolivarian Republic)"))
            Venezuela.Country = "Venezuela"
        }
    }
    const newData = Countries.map(item => (
        {
            'name': item.Country,
            'value': item.TotalConfirmed,
            'NewConfirmed': item.NewConfirmed,
            'NewDeaths': item.NewDeaths,
            'NewRecovered': item.NewRecovered,
            'TotalRecovered': item.TotalRecovered,
            'TotalDeaths': item.TotalDeaths
        }))


    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.data === undefined) {
                    return `数据: 暂无`
                } else {
                    return `
                       国家: ${params['name']}<br/>
                      新增确诊: ${params['data']['NewConfirmed']}<br/>
                       新增治愈: ${params['data'].NewRecovered}<br/>
                       新增死亡: ${params['data'].NewDeaths}<br/>
                       累计确诊: ${params['data'].value}<br/>
                       累计治愈: ${params['data'].TotalRecovered}<br/>
                       累计死亡: ${params['data'].TotalDeaths}<br/>
                       `
                }
            }
        },
        series: [{
            type: 'map',
            map: 'world',
            label: {
                show: false,
                color: '#000',
                fontSize: 0
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
            pieces: [{min: 1000000}, // 不指定 max，表示 max 为无限大（Infinity）。
                {min: 100000, max: 999999},
                {min: 50000, max: 99999},
                {min: 10000, max: 49999},
                {min: 1000, max: 9999},
                /*  {min: 1, max: 9, label: '10 到 200（自定义label）'},*/
                // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                {max: 500}],
            align: 'right',
            //orient: 'horizontal'
        }]
    }
    return option
}