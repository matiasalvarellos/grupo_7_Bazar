const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const db = require("../database/models")

const users = {
    login: (req, res, next) => {
        res.render("login");
    },
    processLogin: (req, res, next) => {
        const errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render("login", { 
                errores: errores.errors,
                old: req.body 
            });
        }
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then( usuarioEncontrado => {
            req.session.usuarioLogueado = usuarioEncontrado;
            if(req.body.recordame){
                res.cookie("recordame", usuarioEncontrado.id, { maxAge: 60000 * 60 * 24 })
            }
            return res.redirect("/");
        })  
    },
    registro:(req, res, next) => {
        res.render("register")
    },
    processRegistro:(req, res, next) => {
        const errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.render("register", {
                errores: errores.errors,
                old: req.body
            })
        };
        db.User.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            type_customer: req.body.type_customer,
            avatar: req.file.filename
        }).then(function(){
            return res.redirect("/users/login");
        })
    },
    logout: function(req, res){
        req.session.destroy();

        res.clearCookie("recordame");
        
        res.redirect("/");
    },   
    account: function(req,res) {          
        if(req.session.usuarioLogueado)
        {console.log(req.session.usuarioLogueado);
           if(req.session.usuarioLogueado.admin)
        {return res.render('admin', {usuario:req.session.usuarioLogueado})}
        else {return res.render('userAccount', {usuario:req.session.usuarioLogueado})} }
       
       else{return res.redirect('/users/login')} 
        
    }
}    

module.exports=users;