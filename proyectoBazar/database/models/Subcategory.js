module.exports=function(sequelize, DataTypes){
    let cols={
    id:{type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true},
    name:{ type: DataTypes.STRING,}, 
        
   category_id:{type: DataTypes.INTEGER,}, 
    }
    
    let alias="categories";
    let config={ timestamps:false}

let Subcategory=sequelize.define(alias, cols, config);
 Subcategory.associate=function(models){
     Subcategory.belongsTo(models.categories, {
     as:"subcategory-category",
    foreignKey:"category_id", 
     })
 }

return Category;
}