module.exports=function(sequelize, dataTypes){
  
    let alias="Cart";
    let cols={	
        id: {type: dataTypes.INTEGER,
             primaryKey:true},
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