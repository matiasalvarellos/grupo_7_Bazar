const db = require('../database/models');

const api={
LastProducts: function (req, res, next){

    db.Product.findOne({
        oder:[['id', 'ASC'], ], }).then(function(user) {

            res.send(user)
        } ) }
    
    
    
    
    }
    