module.exports = function(sequelize, dataTypes){
    let cols= {
        name: dataTypes.STRING ,
        last_name: dataTypes.STRING ,
        email: dataTypes.STRING ,
        password: dataTypes.STRING ,
        type_customer: dataTypes.STRING ,
        avatar: dataTypes.STRING ,
        admin: dataTypes.BOOLEAN
    };
    let User = sequelize.define("User", cols);

    return User;
}