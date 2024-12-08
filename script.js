const diminuirBtn = document.getElementById("diminuirBtn");
const resetBtn = document.getElementById("resetBtn");
const aumentarBtn = document.getElementById("aumentarBtn");
const labelContador = document.getElementById("labelContador");
let contador = 0;

aumentarBtn.onclick = function(){
    contador++;
    labelContador.textContent = contador;
}
diminuirBtn.onclick = function(){
    contador--;
    labelContador.textContent = contador;
}
resetBtn.onclick = function(){
    contador = 0;
    labelContador.textContent = contador;
}