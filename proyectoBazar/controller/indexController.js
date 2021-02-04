let gifResource = require("../requests/gifResource")

let index = {

        inicio: function (req, res, next) {
                res.render("index");
        },

        seguimiento: function (req, res, next) { res.redirect('https://www.correoargentino.com.ar/') },

        pago: function (req, res, next) { res.send('Formas de pago'); },

        giftCard: function (req, res, next) { res.send('Obtené tu GiftCard'); },

        categorias: function (req, res, next) { res.send('Aquí categorías'); },

        nosotros: function (req, res, next) { res.send('Nosotros'); },

        contacto: function (req, res, next) {
                gifResource.random().then(function(resultado){
                        console.log(resultado)
                })
        }
}
module.exports = index;