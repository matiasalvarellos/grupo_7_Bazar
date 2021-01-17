module.exports=function(sequelize, dataTypes){
    let cols={
       
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