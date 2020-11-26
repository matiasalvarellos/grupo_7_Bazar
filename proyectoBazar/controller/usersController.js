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
            req.session.usuario = usuarioEncontrado.email;
            if(req.body.recordame != undefined){
                res.cookie("recordame", )
            }
            return res.send("logueado breo!, sos el guachin q tiene el correo "+ req.session.usuario);
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
                id: crearId()
            }
            let UsuersAdd = [...users , nuevoUsers];
            writeJson(UsuersAdd);
           return res.send("usuario creado!!");
        }else{
           return res.render("register", {errores: errores.errors})
        }
    },
    chequear: function(req, res){
        res.send("vos sos "+ req.session.usuario);
    }        
}
module.exports=users;