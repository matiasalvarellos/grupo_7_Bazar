module.exports = function(sequelize, dataTypes){
    let cols= {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
        },
        name: dataTypes.STRING ,
        last_name: dataTypes.STRING ,
        email: dataTypes.STRING ,
        password: dataTypes.STRING ,
        type_customer: dataTypes.STRING ,
        avatar: dataTypes.STRING ,
        admin: dataTypes.BOOLEAN
    };
    let User = sequelize.define("users", cols);

    return User;
}