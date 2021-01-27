module.exports=function(sequelize, dataTypes){
    const Image = sequelize.define("Image", {
      name: dataTypes.STRING,
    });

    Image.associate = (models) => {
        Image.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id"
        });
    };

    return Image;
}