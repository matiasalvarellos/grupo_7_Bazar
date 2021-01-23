module.exports=function(sequelize, dataTypes){
    const Image = sequelize.define("Image", {
      name: dataTypes.STRING,
    });

    Image.associate = model => {
        Image.belongsTo(model.Product, {
            as: "product",
            foreignKey: "product_id"
        });
    };
    return Image;
}