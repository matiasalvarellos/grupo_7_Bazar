const fs = require("fs");
const path = require("path");

function getUsers() {
    const usersJSON = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), "utf-8");
    const users = JSON.parse(usersJSON);
    return users;
}
function recordameMiddleware(req, res, next){ 
    if(!req.session.usuarioLogueado && req.cookies.recordame){
        const users = getUsers();
        let usuarioaLoguerce = users.find(function(usuario){
            return usuario.id == req.cookies.recordame
        });
        req.session.usuarioLogueado = usuarioaLoguerce;
    }
    return next();    
}

module.exports= recordameMiddleware;