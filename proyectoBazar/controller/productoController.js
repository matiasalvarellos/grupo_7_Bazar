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
    crear: async function (req, res, next ){
        let colors = await db.Color.findAll() 
        let categories = await db.Category.findAll({
            include:[{association:"subcategories"}]
        })
        res.render("productCreate", {categories, colors});
    },
    store: async function (req, res, next){ 
        let productCreate = await db.Product.create({
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
        let imagesTocreate = req.files.map(file => {
            return {
                name: file.filename,
                product_id: productCreate.id,
            }
        })
        await db.Image.bulkCreate(imagesTocreate);
        await productCreate.setColors(req.body.colors);
        res.redirect("/")
    },        
    detalle: async function (req, res, next ){
        let productFound = await db.Product.findByPk(req.params.id, {
            include:["colors", "images", "subcategory"]
        })
        if(productFound){
            res.render("productDetail", { productFound});
        }else{
            res.render("productDetail", { alert: true });
        }
    },
    edit: async function(req, res, next){
        let colors = await db.Color.findAll();
        let categories = await db.Category.findAll({
            include: [{ association: "subcategories" }]
        })
        let product = await db.Product.findByPk(req.params.id,{
            include:["colors"]
        });
        product.colorsId = product.colors.map(color =>{
            return color.id ;
        })
        if(product){
            res.render("productUpdate", { product, categories, colors});
        } else {
            res.render("productUpdate", { alert: true });
        }
    },
    update: async function(req, res, next){
        
        await db.Product.update({
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
        })
        let productFound = await db.Product.findByPk(req.params.id);
        if(productFound){
            await productFound.setColors(req.body.colors);
        }
        res.redirect("/")
    },
    delete: async function(req, res, next){
        let product = await db.Product.findByPk(req.params.id);
        await product.setColors([]);
        await db.Image.destroy({
            where: {
                product_id: req.params.id
            }
        })
        await db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect("/productos")
    }
}
module.exports=producto;