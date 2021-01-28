module.exports = (req, res, next) => {
    console.log(req.session)
    if(req.session.usuarioLogueado.admin == 1){
        return next()
    }
    return res.redirect("/")
}