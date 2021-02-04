const db = require('../database/models');

function price(cost, markup){
    let ganancia = (Number(cost) * Number(markup))/100;
    let total = ganancia + Number(cost);
    return total;
}

producto={
    list:function(req,res,next){
        db.Product.findAll( {include: [ {association:"images"}]}).then(function(products){
            res.render("productList", { products:products })
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
            category_id: req.body.categories        
        })
        let imagesTocreate = req.files.map(file => {
            return {
                name: file.filename,
                product_id: productCreate.id,
            }
        })
        await db.Image.bulkCreate(imagesTocreate);
        await productCreate.setColors(req.body.colors);
        let colors = await db.Color.findAll() 
        let categories = await db.Category.findAll({
            include:[{association:"subcategories"}]
        })
        res.render("productCreate", {message:"producto creado con éxito", alert:true, colors, categories})
    },        
    detalle: async function (req, res, next ){
        let productFound = await db.Product.findByPk(req.params.id, {
            include:["colors", "images", "category"]
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
            include:["colors", "images", "category"]
        });
        product.colorsId = product.colors.map(color =>{
            return color.id ;
        })
        if(product){
            console.log(product.colors)
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
            category_id: req.body.category,
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
    },

    imageDelete: async function (req, res, next){
        await db.Image.destroy ( {
            where: {
                id: req.body.productImage,
            }
        })
    res.render()
    },
    lastProducts: function (req, res, next){

        db.Product.findAll({
            oder:[['id', 'DESC'], ],
           limit:1 }).then(function(user) {
    
                res.send(user)
            } ) },

            totalUser: function (req, res, next){
                db.User.count().then(function(total){
                    res.send("El total de usuario es " +total)
                })}, 
            
            }

        
                   
                
        



module.exports=producto;