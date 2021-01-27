module.exports = function (sequelize, dataTypes) {
        
    const Order = sequelize.define("Order", {
        total_price: dataTypes.INTEGER
    });

    Order.associate = (models) => {
        Order.hasMany(models.Item, {
            as: 'items',
            foreignKey: 'order_id'
        });
        
        Order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id' 
        });
    };
    
    return Order;
}