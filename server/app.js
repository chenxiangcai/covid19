const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/heartmapofchina', function (req, res) {
    res.sendFile(path.join(__dirname, 'build','heart_map_china', 'index.html'));
});
app.get('/heartmapofworld', function (req, res) {
    res.sendFile(path.join(__dirname, 'build','heart_map_world', 'index.html'));
});

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Request-Headers', '*')
    if (req.method == 'OPTIONS') res.send(200)
    /* 让options请求快速返回 */ else next()
})

require('./routes')(app)
app.listen(7777)
console.log('服务器启动成功')