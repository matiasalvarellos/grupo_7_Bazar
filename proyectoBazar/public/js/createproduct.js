window.addEventListener ("load", function(){
    /*let error = []*/
    
    let form = document.querySelector(".prod");     
    form.addEventListener("submit", function(e){
 
         e.preventDefault();
         let file = document.querySelector("input[type='file']");
         console.log(file)
         var hayError=false;

        var inputs= document.querySelectorAll('.inputform');

         inputs.forEach(function(input){
            /*  console.log(input)
            var error = input.parentElement.querySelector('div.invalid-feedback'); */
            if(input.value == ""){
                /* error.style.color="red";
                error.style.fontSize= "12px";
                input.classList.add('is-invalid');                            
                error.innerHTML = "El campo esta vacio.";
                hayError = true;*/
                console.log("elemento", input.nextElementSibling)
                input.nextElementSibling.style.color="red";
                input.nextElementSibling.style.fontSize= "12px";
                input.classList.add('is-invalid');                            
                input.nextElementSibling.innerHTML = "El campo esta vacio.";
                hayError = true;

            }else{
                input.classList.remove('is-invalid');
                input.nextElementSibling.innerHTML = "";
            }
            
            let codigo= document.querySelector("#codigo")
            if (codigo.value != "" && (codigo.value.length < 6 || codigo.value.length > 7)){
                codigo.nextElementSibling.innerHTML = "El codigo tiene que tener 6 o 7 numeros";
            }

         });
        });
    });