module.exports = function(req, res, next){
    res.locals.usuario = false;
    if(req.session.usuarioLogueado){
        res.locals.usuario = req.session.usuarioLogueado 
    }
    return next();
}