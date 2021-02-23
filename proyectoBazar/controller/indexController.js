const db = require('../database/models');

index={
        inicio: function(req,res,next){
                db.Product.findAll( {include: [ {association:"images"}]})
                .then(function(products){
                        res.render("home", {products:products })
                })
        },

        category: function(req,res,next){
                db.Product.findAll( {include: [ {association:"images"}]})
                .then(function(products){
                        res.render("category", {products:products })
                })
        },

        contacto: function(req,res,next){
                db.Product.findAll( {include: [ {association:"images"}]})
                .then(function(products){
                        res.render("contacto", {products:products })
                })
        },


}

module.exports=index;