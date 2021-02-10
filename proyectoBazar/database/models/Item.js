module.exports = function (sequelize, dataTypes) {
        
    const Item = sequelize.define("Item", {
        product_name: dataTypes.STRING,
        unit_price: dataTypes.INTEGER,
        color: dataTypes.STRING,
        image: dataTypes.STRING,
        subtotal: dataTypes.INTEGER,
        quantity: dataTypes.INTEGER
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