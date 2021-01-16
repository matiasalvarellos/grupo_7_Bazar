module.exports= function(sequelize, DataTypes){
    let alias="Color";
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,         },
        name: DataTypes.STRING,    
    };
    let config={
        tableName:'colors',
        timestamps:false,
    }
    let Color=sequelize.define(alias, cols, config);

    Color.associate= (model => {
        Color.belongsToMany(model.Product,{
            as:"products",
            through:"product_color",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        })
    })
    
    return Color;
}