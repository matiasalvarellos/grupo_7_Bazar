const Product = require("./Product");

module.exports= function(sequelize, DataTypes){
let alias="colors";
let cols={
    id:{type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,},
    name:{ type: DataTypes.STRING,
           }    
};
let config={
    timestamps:false,
}
let Color=sequelize.define(alias, cols, config);
Color.associate=function(models){
 Color.belongsToMany(models.products, {
     as:"color-product",
     trough:"product_color",
     foreignKey:"color_id",
     otherKey:"product_id",
     timestamp:false,
     });

}

return Color;
}