module.exports=function(sequelize, DataTypes){
  
let alias="products";
let cols={
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,},
    
    code: {
        type:DataTypes.INTEGER,},
    
    name:{
        type:DataTypes.STRING},

    stock:{
        type:DataTypes.INTEGER },

    description:{
        type: DataTypes.STRING
    },

    cost:{
        type: DataTypes.INTEGER
    },

    markup:{
        type: DataTypes.INTEGER
    },

    discount:{
        type: DataTypes.INTEGER
    },

    created_at:{
        type: DataTypes.DATE
    },

    updated_at:{
        type: DataTypes.DATE
    },


 }

let config={timestamps:true}

let Product=sequelize.define(alias, cols, config);

Product.associate=function(models){
    Product.belongsToMany(models.carts, {
      as:"product-cart",
      trough:"product_cart",
      freignKey:"product_id",
      otherKey:"cart_id",
      timestamps:false,  
    })
   
    Product.belongsToMany(models.categories, {
        as:"product-category",
        trough:"product_category",
        freignKey:"product_id",
        otherKey:"category_id",
        timestamps:false,  
      })

      Product.belongsToMany(models.colors, {
        as:"product-color",
        trough:"product_color",
        freignKey:"product_id",
        otherKey:"color_id",
        timestamps:false,  
      })

}
return Product;
}