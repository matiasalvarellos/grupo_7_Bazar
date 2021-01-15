module.exports=function(sequelize, dataTypes){
  
    let alias="Product";
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
        },
        code: dataTypes.INTEGER,
        name: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        description: dataTypes.STRING,
        cost: dataTypes.INTEGER,
        markup: dataTypes.INTEGER,
        discount:dataTypes.INTEGER
    }

    let config={
        tableName:'products',

    }
    let Product=sequelize.define(alias, cols, config);
   
    return Product;
}