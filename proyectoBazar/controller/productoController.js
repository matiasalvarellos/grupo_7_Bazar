const fs = require('fs');
const path = require('path');
const db = require('../database/models');


function getProducts(){
    const productFilePath = path.join(__dirname, '../data/product.json');
    const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
    return product
}
function writeJson(array){
    let productJSON = JSON.stringify(array, null, 2);
    return fs.writeFileSync(__dirname + "/../data/product.json", productJSON);
}  

producto={
    list:function(req,res,next){
        db.Product.findAll().then(function(products){
            res.render("productList", { products });
        })
    },
    carrito:function(req, res, next ){
        res.render("productCart",{usuario:req.session.usuarioLogueado});
    },
    crear: function (req, res, next ){
        res.render("productCreate");
    },
    store: function (req, res, next){ 
        db.Product.create({
            code: req.body.code,
            name: req.body.name,
            stock: req.body.stock,
            color: req.body.color,
            description: req.body.description,
            cost:req.body.cost,
            markup: req.body.markup,
            discount: req.body.discount,
            categorias: req.body.categoria,  
                  
        }).then(function(product) {
            let imagesTocreate = req.files.map(file => {
                return {
                    name: file.filename,
                    product_id: product.id,
                    
                }

            })


            db.Image.bulkCreate(imagesTocreate).then(function(result){
                console.log(result);
          
                db.product_subcategory.create(
                   {
                   
                    product_id: result[0].product_id,
                    subcategory_id:req.body.subcategory,

                   }) 
               .then(function(result){

                db.product_category.create(
                    {
                    
                     product_id: result.product_id,
                     category_id:req.body.category,
 
                    }) .then(function(){       
           
           
                 res.redirect("/")} )})
        
    }) })

},
    detalle: function (req, res, next ){
        const products = getProducts();
        const idproducts = req.params.id;
        var productsFound;
        for (var i=0; i<products.length; i++){
            if (products[i].id == idproducts){
                productsFound = products[i];
                break;
            }
        }if (productsFound) {
            res.render("productDetail", {productsFound});
        }else{
            res.render("productDetail", {alert: true});
        }
    },
    edit: function(req, res, next){
        db.Product.findByPk(req.params.id).then(product => {
            if(product){
                res.render("productUpdate", { product })
            }else{
                res.render("productUpdate", { alert: true});
            }
        })
    },
    update: function(req, res, next){
        db.Product.update({
            code: req.body.code,
            name: req.body.name,
            stock: req.body.stock,
            color: req.body.color,
            description: req.body.description,
            cost: req.body.cost,
            markup: req.body.markup,
            discount: req.body.discount,
            categorias: req.body.categoria
        }).then(function(){
            res.redirect("/productos")
        })
    },
    delete: function(req, res, next){
        db.Image.destroy({
            where: {
                product_id: req.params.id
            }
        }).then(function(){
            db.Product.destroy({
                where:{
                    id: req.params.id
                }
            })
        }).then(function(){
            res.redirect("/productos")
        })
    }
}

module.exports=producto;