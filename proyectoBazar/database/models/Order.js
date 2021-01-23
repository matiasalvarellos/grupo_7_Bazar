module.exports = function (sequelize, dataTypes) {
        
    const Product = sequelize.define("Order", {
        total_price: dataTypes.DOUBLE
    });

    Product.associate = (models) => {
        Product.hasMany(models.Item, {
            as: 'items',
            foreignKey: 'order_id'
        });
        
        Product.belongsToMany(models.User, {
            as: 'user',
            foreignKey: 'user_id' 
        });
    };
    
    return Product;
}