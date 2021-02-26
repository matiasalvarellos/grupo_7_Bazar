window.addEventListener ("load", function(){
    /*let error = []*/
    
    let form = document.querySelector(".regi");   
      
    form.addEventListener("submit", function(e){
 
         e.preventDefault();
         let file = document.querySelector("input[type='file']");
         console.log(file)
         var hayError=false;

        var inputs= document.querySelectorAll('.inputdatos');

         inputs.forEach(function(input){
            /*  console.log(input)
            var error = input.parentElement.querySelector('div.invalid-feedback'); */
            if(input.value == ""){
                /* error.style.color="red";
                error.style.fontSize= "12px";
                input.classList.add('is-invalid');                            
                error.innerHTML = "El campo esta vacio.";
                hayError = true;*/
                
                input.nextElementSibling.style.color="red";
                input.nextElementSibling.style.fontSize= "12px";
                input.classList.add('is-invalid');                            
                input.nextElementSibling.innerHTML = "El campo esta vacio.";
                hayError = true;

            }else{
                input.classList.remove('is-invalid');
                input.nextElementSibling.innerHTML = "";
            }
                        
         
                                
             });

             let name= document.querySelector("#name")
            if (name.value != "" && (name.value.length < 3)){
                name.nextElementSibling.innerHTML = "Campo de nombre debe tener un minimo de 3 caracteres";
            }

             /*let email= document.querySelector("#email")
            if (email.value.indexOf ("@") != "" && (email.value.indexOf (".") )){
                email.nextElementSibling.innerHTML = "";
            }*/

            let password= document.querySelector("#password")
            if (password.value != "" && (password.value.length < 4)){
                password.nextElementSibling.innerHTML = "La contraseña debe tener un minimo de 4 caracteres";
            }

            if(!hayError){
                this.submit();
            }

        });
    });