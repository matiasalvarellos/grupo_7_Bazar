module.exports = function(sequelize, dataTypes){

    const User = sequelize.define("User", {
        name: dataTypes.STRING ,
        last_name: dataTypes.STRING ,
        email: dataTypes.STRING ,
        password: dataTypes.STRING ,
        type_customer: dataTypes.STRING ,
        avatar: dataTypes.STRING,
        admin: dataTypes.BOOLEAN,
        phone: dataTypes.STRING,
        adress: dataTypes.STRING,
        dni: dataTypes.STRING,
        post_code: dataTypes.STRING
    });

    User.associate = (models) => {
        User.hasMany(models.Item, {
            as: 'items',
            foreignKey: 'user_id'
        });

        User.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'user_id'
        });
    };

    return User;
}