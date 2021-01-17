module.exports=function(sequelize, dataTypes){
  
    let alias="Product";
    let cols={
        code: dataTypes.INTEGER,
        name: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        description: dataTypes.STRING,
        cost: dataTypes.INTEGER,
        markup: dataTypes.INTEGER,
        discount:dataTypes.INTEGER
    }

    let config={
        tableName:'products',
    }

    let Product=sequelize.define(alias, cols, config);
    
    Product.associate=function(models){
     Product.belongsToMany(models.Category,{
     as:'products-categories', 
     through: 'product_category',
     foreignKey:'product_id',
     otherKey:'category_id',
     timestamps:false,  })


    }

    return Product;
}