const db = require('../database/models');

module.exports={

createcategory: function (req, res, next){
  res.render ("categories");    
},

storecategory: function (req, res, next){
  db.Category.create ({
    name: req.body.name
  }). then (function(category){
      console.log (category)
      res.render ("admin")
  })
    
},


createsubcategory: function (req, res, next){
    /*res.render ("subcategories");    
  }
 /*pedir a la base datos todas las categorias que existan/ y mandar a la vista de subcategoria*/
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
       res.redirect("admin")
    })
   
  }

}
    







