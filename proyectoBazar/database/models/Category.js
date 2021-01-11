module.exports=function(sequelize, DataTypes){
    let cols={
    id:{type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true},
    name:{ type: DataTypes.STRING,}, 
        }
    
    let alias="categories";
    let config={ timestamps:false}

let Category=sequelize.define(alias, cols, config);
 Category.associate=function(models){
     Category.belongsToMany(models.products, {
     as:"category-product",
     trough:"product_category",
     foreignKey:"category_id",
     otherKey:"product_id",
     timestamps:false,
     })
 }

return Category;
}