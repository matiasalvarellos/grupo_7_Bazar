module.exports=function(sequelize, dataTypes){
  
    let alias="Product";
    let cols={
        code: dataTypes.INTEGER,
        name: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        description: dataTypes.STRING,
        cost: dataTypes.INTEGER,
        markup: dataTypes.INTEGER,
        discount:dataTypes.INTEGER,
        subcategory_id: dataTypes.INTEGER
    }
    let Product=sequelize.define(alias, cols);

    Product.associate =(model => {
        Product.hasMany(model.Image, {
            as: "image",
            foreignKey: "product_id"
        })
    })
    return Product;
}