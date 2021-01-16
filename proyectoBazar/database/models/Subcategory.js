module.exports=function(sequelize, dataTypes){
    let cols={
        id: {
            type: dataTypes.INTEGER,
             primaryKey:true,},
        name: dataTypes.STRING, 
        category_id:dataTypes.INTEGER, 
    }
    let alias="Subcategory";
    let config={ 
        tableName: 'subcategories',
        timestamps:false
    }

   
    let Subcategory=sequelize.define(alias, cols, config);
  

    return Subcategory;
}