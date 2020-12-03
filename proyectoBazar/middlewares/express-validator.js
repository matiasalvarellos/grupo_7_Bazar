const {body, validationResult} = require("express-validator");
const fs = require("fs");
const path = require ("path");
const bcrypt = require("bcryptjs");

function getUsers() {
    const usersJSON = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), "utf-8");
    const users = JSON.parse(usersJSON);
    return users;
}

const validar = {   
    regis:[
        body("nombre")
         .isLength({min:3})
         .withMessage("Campo de nombre debe tener un minimo de 3 caracteres"),
        body("apellido")
         .isLength({min:3})
         .withMessage("Campo de apellido debe tener un minimo de 3 caracteres"),
        body("email")
         .isEmail()
         .withMessage("El Email debe ser valido")
         .bail()
         .custom(function(value){
                let users = getUsers();
                return users.find(usuario => usuario.id != value);
            })
         .withMessage("Usuario ya existente"),
        body("password")
        .isLength({min: 4})
        .withMessage("La contraseña debe tener un minimo de 4 caracteres")
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
            let users= getUsers();
            let usuarioEncontrado = users.find(usuario => usuario.email == value)
            if(usuarioEncontrado){
               return bcrypt.compareSync(req.body.password, usuarioEncontrado.password)
            }
            return false;
         })
         .withMessage("Usuario o contraseña invalidos"),
        body("password")
         .notEmpty()
         .withMessage("Completar campo de contraseña")
    ]
}

module.exports= validar;