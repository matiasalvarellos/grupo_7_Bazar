producto={
    vista:function(req,res,next){
        res.render("index");
    },
    carrito:function(req, res, next ){
        res.render("productCart");
    },
    crear: function (req, res, next ){
        res.render("productAdd");
    },
    detalle: function (req, res, next ){
        res.render("productDetail");
    }
}

module.exports=producto;