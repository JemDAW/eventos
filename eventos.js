var intervalo;
window.addEventListener("load", activarScript(), false);

function activarScript(){

    window.addEventListener("click", comenzarSaludo(), false);
    window.addEventListener("click", pararSaludo(), false);
}

function comenzarSaludo(){
   intervalo= setInterval()
}

function pararSaludo(){
    clearInterval(intervalo);
}