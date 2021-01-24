const { User } = require('../database/models');

module.exports = function(req, res, next){
    res.locals.usuario = false;
    if(req.session.usuarioLogueado){
        User.findByPk(req.session.usuarioLogueado.id)
        .then((user) => {
            res.locals.usuario = user;
            return next();
        })
    } else {
        return next();
    }
}