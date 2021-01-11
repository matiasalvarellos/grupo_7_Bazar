const db = require("../database/models")
function recordameMiddleware(req, res, next){ 
    if(!req.session.usuarioLogueado && req.cookies.recordame){
        db.User.findOne({
            where:{
                id: req.cookies.recordame
            }
        }).then(function(user){
            req.session.usuarioLogueado = user;
        })
    }
    return next()    
}
module.exports= recordameMiddleware;