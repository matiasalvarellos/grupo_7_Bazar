const db = require('../database/models');

index={
        inicio: async function(req,res,next){
                let products = await db.Product.findAll({
                        include: ["images","subcategory"]
                })
                let sales = await db.Product.findAll({
                        include:["images"],
                        where:{
                                offer: 1
                        },
                        limit:3
                })
                res.render("home", {products:products , sales})
        },
        category: function(req,res,next){
                let category_id= req.params.category_id;
                db.Product.findAll({ 
                        include: ["images", "subcategory"]
                })
                .then(function(products){
                        res.render("category", {products:products, category_id:category_id})
                })
        },
        offers: async function(req,res){
                let productsOffers = await db.Product.findAll({
                        include:["images"],
                        where:{
                                offer:1
                        }
                })
                res.render("offers", { products:productsOffers })
        },
        contacto: function(req,res,next){
                db.Product.findAll( {include: [ {association:"images"}]})
                .then(function(products){
                        res.render("contacto", {products:products })
                })
        },
        

}

module.exports=index;