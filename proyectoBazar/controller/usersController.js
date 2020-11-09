const users={
    login: function( req, res, next ){
        res.render("login");
    },
    registro: function (req , res, next){
        res.render("register")
    }
}
module.exports=users;