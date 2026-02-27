window.onload = function(){
crearContenido();
}


function crearContenido(){
let nodoTitle = document.createElement("title");
let txtTittle = document.createElement("Mi pagina dinamica");
nodoTitle.appendChild(txtTittle);
document.head.appendChild(nodoTitle);

let titularH1=document.createElement("title");
let txtTitular=document.createTextNode("Mi pagina dinamica");
titularH1.appendChild(txtTitular);
document.body.appendChild(titularH1);

let parrafoCur = document.createElement("p");
parrafoCur.setAttribute("style", "font-style: italic");
let txtParrafo = document.createTextNode("Ese es el contenido de mi parrafo. Esta puesto en cursiva");
parrafoCur.appendChild(txtParrafo);
document.body.appendChild(parrafoCur);

}