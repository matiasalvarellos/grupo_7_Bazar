module.exports = function(sequelize, DataTypes){
    let cols= {
        name: DataTypes.STRING ,
        last_name: DataTypes.STRING ,
        email: DataTypes.STRING ,
        password: DataTypes.STRING ,
        type_customer: DataTypes.STRING ,
        avatar: DataTypes.STRING ,
        admin: DataTypes.BOOLEAN
    };
    let User = sequelize.define("users", cols);

    return User;
}