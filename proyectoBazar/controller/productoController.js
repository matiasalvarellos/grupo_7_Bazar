const fs = require('fs');
const path = require('path');

function getProducts(){
    const productFilePath = path.join(__dirname, '../data/product.json');
    const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
    return product
}
function writeJson(array){
    let productJSON = JSON.stringify(array);
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
        const newProd = {
            id: req.body.id,
            name: req.body.name,
            stock: req.body.stock,
            color: req.body.color,
            description: req.body.description,
            image: req.files[0].filename,
            cost:req.body.cost,
            markup: req.body.markup,
            discount: req.body.discount,
            price: req.body.price
        }
        let todosProductos = [...products , newProd];
        writeJson(todosProductos);
        res.send("esta todo ok!")
    },
    detalle: function (req, res, next ){
        res.render("productDetail");
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
            res.send("Producto invalido");
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