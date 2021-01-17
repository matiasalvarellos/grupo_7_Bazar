module.exports=function(sequelize, dataTypes){
    let cols={
        id:{type:dataTypes.INTEGER,
            primaryKey:true,},
        name: dataTypes.STRING,
    };
    let alias="Category";
    let config={
        tableName:'categories', 
        timestamps:false
    };
    let Category = sequelize.define(alias, cols, config);

    Category.associate=function(models){
        Category.belongsToMany (models.Product, {
             as:'products-categories',
             through:"product_category",
             foreignKey:'category_id',
             otherKey:'product_id',
             timestamps:false,
        })
    }
    
   
    return Category;
}