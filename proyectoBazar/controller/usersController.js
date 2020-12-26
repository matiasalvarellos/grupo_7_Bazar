const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

function getUsers(){
    const usersJSON = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), "utf-8");
    const users = JSON.parse(usersJSON);
    return users;
}
function writeJson(array){
    const arrayJson = JSON.stringify(array, null, 2);
    return fs.writeFileSync(path.resolve(__dirname, "../data/users.json"), arrayJson);
}
function crearId(){
    let users = getUsers();
    let ultimoUsuario = users.pop();
    return ultimoUsuario ? ultimoUsuario.id + 1 : 1;
}
const users={
    login: function(req, res, next){
        res.render("login");
    },
    processLogin: function(req, res, next){
        const usuarios = getUsers();
        const errores = validationResult(req);
        if(errores.isEmpty()){
            let usuarioEncontrado = usuarios.find(function(usuario){
                return usuario.email == req.body.email;
            });
            req.session.usuarioLogueado = usuarioEncontrado;
            if(req.body.recordame){
                res.cookie("recordame", usuarioEncontrado.id , {maxAge: 60000 * 60 * 24 })
            }
            return res.redirect("/");
        }else{
            return res.render("login", {errores: errores.errors, old: req.body});
        }    
    },
    registro: function (req, res, next){
        res.render("register")
    },
    processRegistro: function (req, res, next){
        const errores = validationResult(req);
        if(errores.isEmpty()){
            let users = getUsers();
            let nuevoUsers = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                cliente: req.body.cliente,
                id: crearId(),
                avatar: req.file.filename,
                admin: false
            }
            let UsuersAdd = [...users , nuevoUsers];
            writeJson(UsuersAdd);
           return res.redirect("/");
        }else{
           return res.render("register", {
               errores: errores.errors,
               old: req.body
            })
        }
    },
    logout: function(req, res){
        req.session.destroy();

        res.clearCookie("recordame");
        
        res.redirect("/");
    }        
}
module.exports=users;