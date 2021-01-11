module.exports= function (sequelize, DataTypes){
    let alias="carts";
    let cols = {
      id:{type: DataTypes.INTEGER,
          primaryKey:true,
         },
      user_id:{type: DataTypes.INTEGER,},
      amount: {type: DataTypes.INTEGER,},
      status: {type: DataTypes.STRING,},
      created_at:{type: DataTypes.DATE,},
      updated_at: {type: DataTypes.DATE} }

      let Cart=sequelize.define(alias, cols, config);
      Cart.associate=function(models){
        Cart.hasMany(models.users,{
         as:"carts-users",
         foreignKey:"user_id",});
        Cart.belongsToMany(models.product,{
         as:"cart-product",
         trough:"product_cart",
         foreignKey:"cart_id",
         otherKey:"product_id",
         timestamps:false,
     } )   
     }

      return Cart; }