//1

window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;


 document.getElementById("raton").innerText = "x: "+x+" y: "+y;
 
}

//2
/*
var intervalo;
window.addEventListener("load", activarScript, false);

function activarScript(){

    window.addEventListener("click", comenzarSaludo, false);
    window.addEventListener("click", pararSaludo, false);
}

function comenzarSaludo(){
   intervalo= setInterval();
}

function pararSaludo(){
    clearInterval(intervalo);
}
*/
//3

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}

function cambiarColor(){
    document.getElementById("fondo").style.backgroundColor= colorHEX();
}

window.addEventListener("dblclick", cambiarColor, false);

//4