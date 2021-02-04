const db = require('../../database/models');

const apis = {


listProducts: function (req, res, next){

    db.Product.findAll({
        oder:[['id', 'DESC'], ], }).then(function(user) {

            res.send(user)
        } ) },

        lastProducts: function (req, res, next){

            db.Product.findAll({
                oder:[['id', 'DESC'], ],
               limit:10 }).then(function(user) {
        
                    res.send(user)
                } ) },

listUser: function (req, res, next){
            db.User.count().then(function(total){
                res.send("El total de usuario es " +total)
            })}, 




}

module.exports = apis