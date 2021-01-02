index={

inicio: function(req,res,next){
        res.render("index"); },

seguimiento: function(req,res,next)
{ res.redirect('https://www.correoargentino.com.ar/')},

pago: function(req,res,next)
{ res.send('Formas de pago');},

giftCard: function(req, res, next)
{res.send('Obtené tu GiftCard'); },

categorias: function(req,res,next)
{ res.send('Aquí categorías'); },

nosotros: function(req,res,next)
{res.send('Nosotros');},

contacto:function(req, res,next)
{ res.send('Aquí contacto');}

}

module.exports=index;