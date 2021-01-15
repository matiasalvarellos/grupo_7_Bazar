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
    
    return Color;
}