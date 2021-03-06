module.exports=function(sequelize, dataTypes){

    const Subcategory = sequelize.define("Subcategory", {
        name: dataTypes.STRING,
    });

    Subcategory.associate = (models) => {

        Subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })

        Subcategory.hasMany(models.Product,{
            as: "products",
            foreignKey:"subcategory_id"
        })

    };

   
    return Subcategory;
}