

module.exports = function(sequelize, DataTypes) {
    cols={
        category_id:{type: DataTypes.INTEGER},
        product_id:{type:DataTypes.INTEGER},
    },
    alias='product_category',
 config={tableName: 'product_category',
           timestamps:false},
    
    product_category = sequelize.define(alias, cols,config);
        return product_category;
};