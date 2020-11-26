const axios = require('axios')
axios.interceptors.request.use(config => {
    config.headers['X-Access-Token'] = '5cf9dfd5-3449-485e-b5ae-70a60e997864';
    return config
})
module.exports = async (req, res) => {
    try {
        var data = await axios.get('https://api.covid19api.com/summary')
    } catch (e) {
      return res.send({
            status: 503,
            error:e
        })
    }
    res.send(data.data)
}