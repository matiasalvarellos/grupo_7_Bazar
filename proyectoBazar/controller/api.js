window.onload= function () {

fetch("https://apis.datos.gob.ar/georef/api/provincias").
then(function(responnse){ return response.json() }).
then( function(dataDecodedataDecode) { 
    console.log(dataDecode)
} ); }