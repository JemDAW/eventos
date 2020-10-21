//1

window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;


 document.getElementById("raton").innerText = "x: "+x+" y: "+y;
 
}

//2

var intervalo;
window.addEventListener("load", activarScript, false);

function activarScript(){

    document.getElementById("comenzar").addEventListener("click", comenzarSaludo, false);
    document.getElementById("parar").addEventListener("click", pararSaludo, false);
}

function comenzarSaludo(){
   intervalo= setInterval(usoH1, 5000);
}

function pararSaludo(){
    clearInterval(intervalo);
}

function usoH1(){

	if (document.getElementById("ocultar").style.display == "none"){
		document.getElementById("ocultar").style.display = "block";
	}else{
		document.getElementById("ocultar").style.display = "none";
	}
}

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
window.addEventListener("load", alCargar, false);

function alCargar(){
document.getElementById("drag").addEventListener("dragover", allowDrop,false);
document.getElementById("drag").addEventListener("drop", drop,false);
document.getElementById("drag2").addEventListener("dragstart", drag,false);
}

function allowDrop(ev) {
	ev.preventDefault();
  }

  function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	document.getElementById("drag").src= "img/papeleraLlena.png";
  }