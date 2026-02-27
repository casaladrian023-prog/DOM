window.onload = function(){
let contador = 0;
const btn= document.getElementById('contadorbtn');

btn.addEventListener('click', () => {
contador++;
btn.textContent='clicks: '+contador;
});

}