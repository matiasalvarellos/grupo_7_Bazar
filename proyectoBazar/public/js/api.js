window.onload= function () {

    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(function(response){ 
        return response.json() 
    })
    .then( function(data){ 
            // crea un nuevo div
            // y añade contenido
            //añade texto al div creado.
        document.querySelector(".provincias").innerHTML= data.provincias[6].nombre;
        for(let i=0; i<data.provincias.length; i++){
            let item = data.provincias[i].nombre;       
            
            document.querySelector(".provincias").insertAdjacentHTML('beforeend', '<option value="'+item+'">'+item+'</option>'); 
        }
    }); 
}