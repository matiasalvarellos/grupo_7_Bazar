const db = require('../../database/models');
const bcrypt = require("bcryptjs");

const apis = {
    productsList: async function (req, res){

        let products = await db.Product.findAll({
            oder:[
                ['id', 'DESC'], 
            ],
            include:["images", "subcategory", "colors"] 
            
        })

        let lastProducts = await db.Product.findAll({
            include:["images"],
            order: [
                ['created_at', 'DESC'],
            ],
            limit: 5
        })

        products.forEach(product =>{
            product.setDataValue("endpoint", "/api/products/" + product.id);
        })
        
        lastProducts.forEach(product => {
            product.setDataValue("endpoint", "/api/products/" + product.id);
        })

        let jsonProducts = {
            meta:{
                status: 200,
                total_products: products.length,
                lastProducts: lastProducts,
                url: "/api/products"
            },
            data:products
        }
        res.json(jsonProducts)

    },
    productDetail: function(req, res){
        db.Product.findByPk(req.params.id, {
            include:["subcategory","colors"]
        }).then(product =>{
            let productJson = {
                data:{
                    id: product.id,
                    code: product.code,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    data_color: product.colors,
                    data_subcategory: product.subcategory
                }
            }
            res.json(productJson)
        })
    },
    amountOrder: function (req, res) {
        db.Order.findAll({
            include: ["items"]
        })
            .then(resultado => {
                res.json(resultado)
            })
    },
    usersList: function (req, res){
        db.User.findAll().then(users => {
            let newData = users.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    last_name: user.last_name,
                    email: user.email,
                    type_customer: user.type_customer,
                    endpoint: "/api/user/" + user.id
                }
            })
            let respuesta = {
                meta:{
                    status: 200,
                    total_users: users.length ,
                    url: "/api/users"
                },
                data: newData 
            }
            res.json(respuesta) 
        })         
    },
    userDetail: function (req, res) {
        db.User.findByPk(req.params.id).then(resultado => {
            let jsonProducto = {
                meta:{
                    status: 200
                },
                data: {
                    id: resultado.id,
                    name: resultado.name,
                    last_name: resultado.last_name,
                    email: resultado.email,
                    type_customer: resultado.type_customer
                }
            }
            res.json(jsonProducto);
        })
    },
    checkPassword: async function(req, res){
        let userFound = await db.User.findByPk(req.session.usuarioLogueado.id);
        let boolean = bcrypt.compareSync(req.body.password, userFound.password)
        res.json({
            isCorrect : boolean
        })
    },
    updatePassword: async function(req, res){
        
        await db.User.update({
           password: bcrypt.hashSync(req.body.new)
        },{
            where: {
               id: req.session.usuarioLogueado.id
            }
        })

        res.json("Todo ok");

        let userFound = await db.User.findByPk(req.session.usuarioLogueado.id)
        req.session.usuarioLogueado = userFound;
       
    }
}

module.exports = apis