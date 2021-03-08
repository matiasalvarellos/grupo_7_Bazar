const db = require('../database/models');

index={
        inicio: function(req,res,next){
                db.Product.findAll( 
                        {oder:[['id','DESC'],],
                        include: ["images","subcategory"]})
                .then(function(products){
                        res.render("home", {products:products })
                })
        },

        category: function(req,res,next){
                let category_id= req.params.category_id;
                db.Product.findAll({ 
                        oder:[['id', 'DESC']],
                        include: ["images", "subcategory"]
                })
                .then(function(products){
                        res.render("category", {products:products, category_id:category_id})
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