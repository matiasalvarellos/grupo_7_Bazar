module.exports = function (sequelize, dataTypes) {
    const Category = sequelize.define("Category", {
        name: dataTypes.STRING,
    });

    Category.associate = (models) => {
        Category.hasMany(models.Subcategory, {
            as: "subcategories",
            foreignKey: "category_id"
        })
    };   
   
    return Category;
}