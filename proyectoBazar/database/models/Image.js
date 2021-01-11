module.exports=function(sequelize, dataTypes){
    let alias="Image";
    let cols={
       name: dataTypes.STRING,
       product_id: dataTypes.INTEGER
    }
    let config={
        timestamps:true
    }
    let Image = sequelize.define(alias, cols, config);
       
    return Image;
}