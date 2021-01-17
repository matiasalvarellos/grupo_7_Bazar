module.exports = function(sequelize, DataTypes) {
    cols={
        subcategory_id:{type: DataTypes.INTEGER},
        product_id:{type:DataTypes.INTEGER},
    },
    alias='product_subcategory',
 config={tableName: 'product_subcategory',
           timestamps:false},
    
    product_subcategory = sequelize.define(alias, cols,config);
        return product_subcategory;
};