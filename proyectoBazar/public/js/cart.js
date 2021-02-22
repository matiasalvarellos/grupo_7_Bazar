window.addEventListener("load", function(){
    let buyForm = document.querySelector(".buy")
    

    buyForm.addEventListener("submit", function(e){
        if (!document.querySelector(".containerCart")){
            e.preventDefault();
        }
    })
})