window.onload=function(){
    cargarImagen();
}


function cargarImagen(){
    let destino = document.getElementById("imagen");

if(destino= undefined)
alert("no existe el bloque destino")
else{
let nodoImg= document.createElement("img");
nodoImg.setAttribute("src", "img/progama.jpg");
destino.appendChild(nodoImg);
}
}