window.addEventListener("load",function(){
    let form = document.querySelector(".changePassword");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        let password = document.querySelector("#password")
        let newPass = document.querySelector("#new")
        let repeatPass = document.querySelector("#repeat")

        let passValue = password.value;
        let newPassValue = newPass.value;
        let repeatPassValue = repeatPass.value;

        let body = {
            password: passValue,
            new: newPassValue,
            repeat: repeatPassValue
        }

        fetch("http://localhost:3001/api/users/checkPassword", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(resultado => resultado.json())
        .then(data => {
            let message = document.querySelector("#message"); 
            let errors = [];

            if(!passValue || !newPassValue || !repeatPassValue){
                errors.push('<p>los campos son obligatorios</p>')
            }

            if(passValue && !data.isCorrect){
                errors.push('<p>contraseña incorrecta!</p>')
            }
            
            if(repeatPassValue && newPassValue && newPassValue != repeatPassValue){
                errors.push('<p>Las contraseñas no coinciden</p>');
            }

            if(data.isCorrect && passValue == newPassValue){
                errors.push('<p>No puedes elegir la misma contraseña de antes</p>')
            }

            if (newPassValue && newPassValue == repeatPassValue && newPassValue.length < 4) {
                errors.push('<p>la contraseña tiene que tener mas de 4 caracteres</p>');
            }

            message.innerHTML = ""

            if(errors.length){
                message.innerHTML += errors.reduce((acum, error) => acum += error )
                return
            }
            
            fetch("http://localhost:3001/api/users/updatePassword", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                document.querySelector("#password").value = "";
                document.querySelector("#new").value = "" ;
                document.querySelector("#repeat").value = "" ;

                message.innerHTML = '<p>Contraseña cambiada exitosamente</p>'
            })
        })

    })
    

})