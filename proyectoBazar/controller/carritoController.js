const db = require("../database/models");


module.exports = {
    listCart: async (req, res) =>{
        let items = await db.Item.findAll({
            where: {
                user_id: req.session.usuarioLogueado.id,
                order_id: null
            }
        })
        let totalPrice = 0;
        items.forEach(item =>{
            totalPrice += item.subtotal
        })
        return res.render("productCart", { items , totalPrice});
    },
    addProduct: async (req, res) => {
        let productFound = await db.Product.findByPk(req.params.id, {
            include:["images"]
        });
        await db.Item.create({
            product_name: productFound.name,
            unit_price: Number(productFound.price),
            color: req.body.colors,
            subtotal: Number(req.body.cantidad) * Number(productFound.price),
            quantity: Number(req.body.cantidad),
            image: productFound.images[0].name,
            user_id: req.session.usuarioLogueado.id
        })
        return res.redirect("/") 

    },
    destroyItem: async (req, res) =>{
        await db.Item.destroy({
            where:{
                id: req.params.id
            }
        });
        res.redirect("/cart")
    },
    addOrder: async(req, res) =>{
        let items = await db.Item.findAll({
            where:{
                user_id: req.session.usuarioLogueado.id,
                order_id: null
            }
        })
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.subtotal
        })
        let orderNew = await db.Order.create({
            total_price: totalPrice,
            user_id: req.session.usuarioLogueado.id
        })
        await db.Item.update({
            order_id : orderNew.id
        },{
            where:{
                user_id: req.session.usuarioLogueado.id,
                order_id: null
            }
        })
        return res.redirect("/")
    }
}