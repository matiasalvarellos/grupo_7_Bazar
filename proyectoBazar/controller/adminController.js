const db = require('../database/models');

module.exports={

createCategory: function (req, res, next){
  res.render ("categories");    
},

storeCategory: function (req, res, next){
  db.Category.create ({
    name: req.body.name
  }). then (function(category){
      console.log (category)
      res.render ("categories", { message:"categoría creada con éxito" })
  })
  },

createColor: function( req, res, next) {
    res.render("colors");
},
  storeColor: function( req, res, next) {
   db.Color.create({
     name: req.body.name,
     hexadecimal:req.body.hexadecimal}). then (function (color) {
       console.log(color);
       res.render ("colors", {message: "Color creado con éxito" })
     }) 
},
createsubcategory: function (req, res, next){
  db.Category.findAll()       
  . then(function(categories){
    return res.render("subcategories", {categories: categories})
  })
},

storesubcategory: function (req, res, next){
 
    db.Subcategory.create ({
      
        name: req.body.name,
      category_id: req.body.categories

    }).then(function(){
      res.redirect("/users/account")
    })
   
  }
}
    







