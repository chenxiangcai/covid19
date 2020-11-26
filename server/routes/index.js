module.exports = app => {
    app.get('/listofchina', require('./listofchina'))
    app.get('/listofworld', require('./listofworld'))
    app.get('/countofchina', require('./count_china'))
    app.get('/broadcast', require('./broadcast'))
}