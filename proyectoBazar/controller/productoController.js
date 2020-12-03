const fs = require('fs');
const path = require('path');


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
        const products = getProducts();
        res.render("list" ,{products});
    },
    carrito:function(req, res, next ){
        res.render("productCart");
    },
    crear: function (req, res, next ){
        res.render("productAdd");
    },
    store: function (req, res, next){
        const products= getProducts();
        let image = []
        for (let i=0; i<req.files.length; i++) {
            image.push (req.files[i].filename)
        }
        const newProd = {
            id: products[products.length - 1].id + 1,
            code: req.body.code,
            name: req.body.name,
            stock: req.body.stock,
            color: req.body.color,
            description: req.body.description,
            image,
            cost:req.body.cost,
            markup: req.body.markup,
            discount: req.body.discount,
        }
        let todosProductos = [...products , newProd];
        writeJson(todosProductos);
        res.render("productAdd", {alert: true});
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
        const products = getProducts()
        const idproduct = req.params.id;
        let productFound = products.find(function(usuario){
           return usuario.id == idproduct
        });
        if(productFound){
            res.render("productEdit", { product:productFound })
        }else{
            res.render("productEdit", {alert: true});
        }
    },
    update: function(req, res, next){
        const products = getProducts();
        let id = req.params.id;
        let prodEdit = products.map(function(producto){
            if(producto.id == id){
                producto.name = req.body.name;
                producto.stock = req.body.stock;
                producto.color = req.body.description;
                producto.cost = req.body.cost;
                producto.markup = req.body.markup;
                producto.discount = req.body.discount;
                producto.price = req.body.price;
                producto.image = req.files[0] ? req.files[0].filename : producto.image;
            }
            return producto;
        });
        writeJson(prodEdit);      
        res.send("salio todo bien!")
    },
    delete: function(req, res, next){
        const products = getProducts();
        let idProduct = req.params.id;
        let productdestroy = products.filter(function (prod) {
            return prod.id != idProduct;
        })
        writeJson(productdestroy);
        res.send("producto eliminado sin problemas")
    }
}

module.exports=producto;