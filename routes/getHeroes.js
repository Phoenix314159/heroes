const heroes = require('../data/heroes');


module.exports = app => {

    app.get('/api/heroes', (req, res) => {
        res.status(200).json({data: heroes.data});
    })
}
