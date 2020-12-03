function authMiddleware(req,res,next){
    if(req.session.usuarioLogueado){
       return next();
    }
    return res.redirect("/users/login")
}
module.exports= authMiddleware;