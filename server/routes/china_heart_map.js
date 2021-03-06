const axios = require('axios')
axios.interceptors.request.use(config => {
    config.headers.Authorization = 'apicode';
    config.headers.apicode = '5136e95ba9f249c89204f750afddafb6'
    return config
})
module.exports = async (req, res) => {
    try {
        var data = await axios.get('http://api.yonyoucloud.com/apis/dst/ncov/spreadQuery')
    } catch (e) {
        res.send({
            status: 503,
            error:e
        })
    }

    const obj = {
        type: "FeatureCollection",
        crs: {
            type: "name",
            properties: {
                name: "urn:ogc:def:crs:OGC:1.3:CRS84"
            }
        }
    }
    const stateDetail = {
        "北京市": {
            "code": 110000000000,
            "coordinates": [
                116.407526,
                39.90403
            ]
        },
        "天津市": {
            "code": 120000000000,
            "coordinates": [
                117.200983,
                39.084158
            ]
        },
        "河北省": {
            "code": 130000000000,
            "coordinates": [
                114.468664,
                38.037057
            ]
        },
        "山西省": {
            "code": 140000000000,
            "coordinates": [
                112.562398,
                37.873531
            ]
        },
        "内蒙古自治区": {
            "code": 150000000000,
            "coordinates": [
                111.765617,
                40.817498
            ]
        },
        "辽宁省": {
            "code": 210000000000,
            "coordinates": [
                123.42944,
                41.835441
            ]
        },
        "吉林省": {
            "code": 220000000000,
            "coordinates": [
                125.32599,
                43.896536
            ]
        },
        "黑龙江省": {
            "code": 230000000000,
            "coordinates": [
                126.661669,
                45.742347
            ]
        },
        "上海市": {
            "code": 310000000000,
            "coordinates": [
                121.473701,
                31.230416
            ]
        },
        "江苏省": {
            "code": 320000000000,
            "coordinates": [
                118.763232,
                32.061707
            ]
        },
        "浙江省": {
            "code": 330000000000,
            "coordinates": [
                120.152791,
                30.267446
            ]
        },
        "安徽省": {
            "code": 340000000000,
            "coordinates": [
                117.284922,
                31.861184
            ]
        },
        "福建省": {
            "code": 350000000000,
            "coordinates": [
                119.295144,
                26.100779
            ]
        },
        "江西省": {
            "code": 360000000000,
            "coordinates": [
                115.909228,
                28.675696
            ]
        },
        "山东省": {
            "code": 370000000000,
            "coordinates": [
                117.019973,
                36.671199
            ]
        },
        "河南省": {
            "code": 410000000000,
            "coordinates": [
                113.665412,
                34.757975
            ]
        },
        "湖北省": {
            "code": 420000000000,
            "coordinates": [
                114.298572,
                30.584355
            ]
        },
        "湖南省": {
            "code": 430000000000,
            "coordinates": [
                112.982279,
                28.194090
            ]
        },
        "广东省": {
            "code": 440000000000,
            "coordinates": [
                113.280637,
                23.125178
            ]
        },
        "广西壮族自治区": {
            "code": 450000000000,
            "coordinates": [
                108.320004,
                22.824020
            ]
        },
        "海南省": {
            "code": 460000000000,
            "coordinates": [
                110.331190,
                20.031971
            ]
        },
        "重庆市": {
            "code": 500000000000,
            "coordinates": [
                106.550464,
                29.563761
            ]
        },
        "四川省": {
            "code": 510000000000,
            "coordinates": [
                104.065735,
                30.659462
            ]
        },
        "贵州省": {
            "code": 520000000000,
            "coordinates": [
                106.713478,
                26.578343
            ]
        },
        "云南省": {
            "code": 530000000000,
            "coordinates": [
                102.712251,
                25.040609
            ]
        },
        "西藏自治区": {
            "code": 540000000000,
            "coordinates": [
                91.132212,
                29.660361
            ]
        },
        "陕西省": {
            "code": 610000000000,
            "coordinates": [
                108.948024,
                34.263161
            ]
        },
        "甘肃省": {
            "code": 620000000000,
            "coordinates": [
                103.823557,
                36.058039
            ]
        },
        "青海省": {
            "code": 630000000000,
            "coordinates": [
                101.778916,
                36.623178
            ]
        },
        "宁夏回族自治区": {
            "code": 640000000000,
            "coordinates": [
                106.278179,
                38.466370
            ]
        },
        "新疆维吾尔自治区": {
            "code": 650000000000,
            "coordinates": [
                87.617733,
                43.792818
            ]
        },
        "香港": {
            "code": 810000,
            "coordinates": [
                114.171202,
                22.277469
            ]
        },
        "澳门": {
            "code": 820000,
            "coordinates": [
                113.543117,
                22.186883
            ]
        },
        "台湾": {
            "code": 710000,
            "coordinates": [
                121.509062,
                25.044332
            ]
        }
    }

    function forIn(obj) {
        return obj.coordinates
    }

    obj.features = data.data.newslist.map(item => {
        return {
            type: "Feature",
            properties: {
                name: item.provinceName,
                confirm: item.confirmedCount
            },
            geometry: {
                type: "Point",
                coordinates: forIn(stateDetail[item.provinceName])
            }
        }
    })

    res.send(obj)
}
