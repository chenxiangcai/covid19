const axios = require('axios')
axios.interceptors.request.use(config => {
    config.headers =  {"authoration":"apicode","apicode":"5136e95ba9f249c89204f750afddafb6"};
    return config
})
module.exports = async (req, res) => {
    try {
        var data = await axios.get('http://api.yonyoucloud.com/apis/dst/ncov/query')
    } catch (e) {
        res.send({
            status: 503,
            error:e
        })
    }
    res.send(data.data.newslist[0].news)
}