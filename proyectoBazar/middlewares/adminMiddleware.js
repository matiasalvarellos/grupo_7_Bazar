module.exports = (req, res, next) => {
    if(req.session.usuarioLogueado.admin == 1){
        /*ACCEDE A DATOS EN LAS VISTAS*/
        
         return next()
    }
    return res.redirect("/")
}

