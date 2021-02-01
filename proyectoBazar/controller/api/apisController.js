const db = require('../../database/models');

const apis = {

listUsers: function (req, res) {
    db.User.findAll()
    .then(function(users){
        res.json (users)
    })
    .catch
},

listProducts: function (req, res) {
    db.Product.findAll()
    .then(function(products){
        res.json(products)
    })
}

}

module.exports = apis