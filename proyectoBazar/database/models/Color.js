module.exports= function(sequelize, DataTypes){
    const Color = sequelize.define("Color", {
        name: DataTypes.STRING,
        hexadecimal: DataTypes.STRING
    });

    Color.associate = (models) => {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_color',
            foreignKey: 'color_id',
            otherKey: 'product_id'
        });
    };
    
    return Color;
}