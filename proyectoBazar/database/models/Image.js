module.exports=function(sequelize, dataTypes){
    let alias="Image";
    let cols={ 
       name: dataTypes.STRING,
       product_id: dataTypes.INTEGER
    }
    let config={
        tableName:'images',
        
    }
    let Image = sequelize.define(alias, cols, config);
    Image.associate= function (models){
        Image.belongsTo(models.Product,
            { as:"images-product",
            foreignKey:"product_id",
        }
            
            )
    }
    

       
    return Image;
}