module.exports=function(sequelize, dataTypes){
    let cols={
        name: dataTypes.STRING,
    };
    let alias="Category";
    let config={
        tableName:'categories', 
        timestamps:false
    };
    let Category = sequelize.define(alias, cols, config);
    
   
    return Category;
}