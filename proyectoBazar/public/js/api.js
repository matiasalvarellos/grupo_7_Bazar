window.onload= function () {

    fetch("https://apis.datos.gob.ar/georef/api/provincias").
    then(function(response){ return response.json() }).
    then( function(dataDecode) { 

  
            // crea un nuevo div
            // y añade contenido
            //añade texto al div creado.
          
   

        console.log(dataDecode.provincias[1].nombre)
        document.querySelector(".provincias").innerHTML= dataDecode.provincias[6].nombre;
        for(let i=0; i<dataDecode.provincias.length; i++)
        {   let item= dataDecode.provincias[i].nombre;       
            document.querySelector(".provincias").insertAdjacentHTML('beforeend', '<option name="provincia" value="'+item+'">'+item+'</option>'); }
    } ); }