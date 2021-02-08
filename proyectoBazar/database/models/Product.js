module.exports=function(sequelize, dataTypes){

    const Product = sequelize.define("Product", {
        code: dataTypes.INTEGER,
        name: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        description: dataTypes.TEXT,
        cost: dataTypes.INTEGER,
        markup: dataTypes.INTEGER,
        discount: dataTypes.INTEGER,
        price: dataTypes.INTEGER,
        subcategory_id: dataTypes.INTEGER,
    });

    Product.associate = (models) => {
        Product.hasMany(models.Image, {
            as: "images",
            foreignKey: "product_id"
        });

        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'product_color',
            foreignKey: 'product_id',
            otherKey: 'color_id'
        });

        Product.belongsTo(models.Subcategory, {
            as: "subcategory",
            foreignKey: "subcategory_id"
        });
    };
    return Product;
}