const express = require('express');
const app = express();

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Request-Headers', '*')
    if (req.method == 'OPTIONS') res.send(200)
    /* 让options请求快速返回 */ else next()
})

require('./routes')(app)
app.listen(80)
console.log('服务器启动成功')