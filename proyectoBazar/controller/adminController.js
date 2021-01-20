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
      res.render ("index")
  })
    
}

}