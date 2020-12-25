module.exports = (req, res, next) => {
    if(req.session.usuarioLogueado.admin){
        return next()
    }
    return res.redirect("/")
}