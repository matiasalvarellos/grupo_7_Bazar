module.exports=function(sequelize, DataTypes){

    let alias="images";
    let cols={
        id:{ 
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,},

       name:{
           type: DataTypes.STRING,},
       
       product_id:{ 
           type:DataTypes.INTEGER,
       },
       
       created_at:{
           type: DataTypes.DATE,
       } }    
       
       let config={timestamps:true,}
    let Image=sequelize.define(alias, cols, config);

    Image.associate=function(models){
    Image.belongsTo(models.products,{
        as: "products-images",
        foreignKey:"product_id", })    
    }
    return Image;
}