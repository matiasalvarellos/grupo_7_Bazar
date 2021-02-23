const db = require('../database/models');

index={
        inicio: function(req,res,next){
                db.Product.findAll( {include: [ {association:"images"}]})
                .then(function(products){
                        res.render("index", {products:products })
                })
        }
}

module.exports=index;