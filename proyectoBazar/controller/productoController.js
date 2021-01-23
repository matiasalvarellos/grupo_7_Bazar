const db = require('../database/models');

function price(cost, markup){
    let ganancia = (Number(cost) * Number(markup))/100;
    let total = ganancia + Number(cost);
    return total;
}

producto={
    list:function(req,res,next){
        db.Product.findAll().then(function(products){
            res.render("productList", { products })
        })
    },
    carrito:function(req, res, next ){
        res.render("productCart",{usuario:req.session.usuarioLogueado});
    },
    crear: function (req, res, next ){
        db.Category.findAll({
            include:[{association:"subcategories"}]
        })
        .then(function(categories){
            res.render("productCreate", {categories});
        })
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
            price: price(req.body.cost, req.body.markup),
            subcategory_id: req.body.subcategories        
        })
        .then(function(product){
            let imagesTocreate = req.files.map(file => {
                return {
                    name: file.filename,
                    product_id: product.id,
                }
            })
            db.Image.bulkCreate(imagesTocreate).then(function (){
                res.redirect("/")
            })
        })
    },        
    detalle: async function (req, res, next ){
        let images = await db.Image.findAll({
                where:{
                    product_id: req.params.id
                }   
            })
        let productFound = await db.Product.findByPk(req.params.id)
        if(productFound){
            res.render("productDetail", { productFound, images});
        }else{
            res.render("productDetail", { alert: true });
        }
    },
    edit: function(req, res, next){
        let categories = db.Category.findAll({
            include: [{ association: "subcategories" }]
        })
        let product = db.Product.findByPk(req.params.id);
        Promise.all([categories, product])
        .then(function([categories, product]){
            if (product) {
                res.render("productUpdate", { product, categories });
            } else {
                res.render("productUpdate", { alert: true });
            }
        })
    },
    update: function(req, res, next){
        db.Product.update({
            code: req.body.code,
            name: req.body.name,
            stock: req.body.stock,
            description: req.body.description,
            cost: req.body.cost,
            markup: req.body.markup,
            discount: req.body.discount,
            price: price(req.body.cost, req.body.markup),
            subcategory_id: req.body.subcategories,
        },{
            where: {
                id: req.params.id
            }
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