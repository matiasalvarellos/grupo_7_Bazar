const {check, body, validationResult} = require("express-validator");
const fs = require("fs");
const path = require ("path");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const validar = {   
    regis:[
        body("name")
         .isLength({min:3})
         .withMessage("Campo de nombre debe tener un minimo de 3 caracteres"),
        body("last_name")
         .isLength({min:3})
         .withMessage("Campo de apellido debe tener un minimo de 3 caracteres"),
        body("email")
            .isEmail()
            .withMessage("El Email debe ser valido")
            .bail()
            .custom(function(value){
                return db.User.findOne({
                    where:{
                        email: value
                    }
                }).then(user => {
                    if(user){
                        return Promise.reject("Email ya registrado!")
                    }
                })
            }),
        body("password")
            .isLength({min: 4})
            .withMessage("La contraseña debe tener un minimo de 4 caracteres"),
        body("avatar")
            .custom(function(value, {req}){
                return req.file;
            })
            .withMessage("Imagen Obligatoria")
            .bail()
            .custom(function(value, {req} ){
                const imagenesValidas = [".jpg", ".jpeg", ".png"]
                const extencion = path.extname(req.file.originalname);
                return imagenesValidas.includes(extencion);               
            })
            .withMessage("archivo no valido")
    ],
    login:[
        body("email")
            .notEmpty()
            .withMessage("Completar campo de Email")
            .bail()
            .isEmail()
            .withMessage("Email con formato incorrecto")
            .bail()
            .custom(function(value, {req}){
             return db.User.findOne({
                where:{
                    email: value
                }
             }).then(user => {
                    if(!user){
                        return Promise.reject("Usuario o contraseña invalidos")
                    }
                    if(!bcrypt.compareSync(req.body.password, user.password)){
                        return Promise.reject("Usuario o contraseña invalidos")
                    }
                })
            }),
        body("password")
            .notEmpty()
            .withMessage("Completar campo de contraseña")
    ],

    prod:[
        check("code")
         .isLength({min:5, max:8})
         .withMessage("Campo de code tener entre 5 y 8 caracteres"),

         check("name")
         .isLength({min:3})
         .withMessage("Campo de nombre debe tener un minimo de 3 caracteres"),

         check("stock")
         .isLength({})
         .withMessage("Campo de stock tiene que estar completo"),

         check("cost")
         .isLength({min:1})
         .withMessage("Campo de costo de producto tiene que estar completo"),

         check("markup")
         .isLength({min:1})
         .withMessage("Campo de markup tiene que estar completo"),

         check("discount")
         .isLength({min:1})
         .withMessage("Campo discount tiene que estar completo"),

         check("description")
         .isLength({min:3})
         .withMessage("Campo description tiene que estar completo")
         
    ],

    cat:[
        check("name")
        .isLength({min:3})
        .withMessage("Campo de nombre debe tener un minimo de 3 caracteres")
    ],

    colors:[
        check("name")
        .isLength({min:3})
        .withMessage("Campo de nombre de color tiene que estar completo")
        
    ],

    subcat:[
        check("name")
         .isLength({min:3})
         .withMessage("Campo de subcategoria debe estar completo")

        ]

    
}

module.exports= validar;