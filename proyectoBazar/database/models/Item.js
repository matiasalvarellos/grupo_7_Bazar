module.exports = function (sequelize, dataTypes) {
        
    const Item = sequelize.define("Item", {
        total_price: dataTypes.INTEGER
    });

    Item.associate = (models) => {
        Item.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'order_id'
        });
        
        Item.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id' 
        });
    };
    
    return Item;
}