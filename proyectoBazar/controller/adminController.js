const db = require('../database/models');
const {check, body, validationResult} = require("express-validator");

module.exports={

createCategory: function (req, res, next){
  res.render ("categories");    
},

storeCategory: function (req, res, next){
     
  let errors =validationResult(req);

  if (errors.isEmpty()){

  
  db.Category.create ({
    name: req.body.name
  }). then (function(category){
      console.log (category)
      res.render ("categories", { message:"categoría creada con éxito" })
  })
}
else {
  
   return res.render("categories", {errors:errors.errors })
}

  },

createColor: function( req, res, next) {
    res.render("colors");
},
  storeColor: function( req, res, next) {

  let errors =validationResult(req);

  if (errors.isEmpty()){

   db.Color.create({
     name: req.body.name,
     hexadecimal:req.body.hexadecimal}). then (function (color) {
       console.log(color);
       res.render ("colors", {message: "Color creado con éxito" })
     }) 

    }
    else {
      
       return res.render("colors", {errors:errors.errors })
    }
},

createsubcategory: function (req, res, next){
  db.Category.findAll()       
  . then(function(categories){
    return res.render("subcategories", {categories: categories})
  })
},

storesubcategory: function (req, res, next){

  let errors =validationResult(req);

  if (errors.isEmpty()){
 
    db.Subcategory.create ({      
      name: req.body.name,
      category_id: req.body.categories
    }).then(function(){
      res.redirect("/admin/subcategories")
    })

  }
  else {
    db.Category.findAll()       
  . then(function(categories){
    return res.render("subcategories", {categories: categories, errors:errors.errors })
  })
    
  }
   
  }
}
    







