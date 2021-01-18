module.exports=function(sequelize, dataTypes){
  
    let alias="Cart";
    let cols={	
        user_id: dataTypes.INTEGER,
        amount: dataTypes.INTEGER,
        status: dataTypes.STRING,
        created_at: dataTypes.DATE,
        updated_at: dataTypes.DATE,}
       
    let config={
        tableName:'carts'
    }    
        
    let Product=sequelize.define(alias, cols, config);
    
    return Product;
}