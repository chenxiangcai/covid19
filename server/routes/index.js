module.exports = app => {
    app.get('/listofchina', require('./listofchina'))
    app.get('/listofworld', require('./listofworld'))
    app.get('/countofchina', require('./count_china'))
    app.get('/broadcast', require('./broadcast'))
    app.get('/world_heart_map', require('./world_heart_map'))
    app.get('/china_heart_map', require('./china_heart_map'))
}