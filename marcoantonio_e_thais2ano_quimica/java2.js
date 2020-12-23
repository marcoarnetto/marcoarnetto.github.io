var botao2 = document.getElementById("btOk2");
var hh;

botao2.onclick = function ()	{
var select2 = document.getElementById('tipo2');
var valor2 = select2.options[select2.selectedIndex].value;
	console.log (valor2);
	var numero2 = document.getElementById('num2').value;
	numero2 = parseInt (numero2);
	var h = 6.02;
	var o = 0.5 * 6.02;

var resultado2; 
if (valor2=="h2") {
		resultado2 = numero2 * h;
		n2a = numero2+" mol de H<sub>2</sub> --- quantia de moléculas";
		document.getElementById("n2a").innerHTML = n2a; 
		n2aa = "1x = "+numero2*h+" • 10^23 <br><br> x = "+numero2*h+" : 1 = "+resultado2;
		document.getElementById("n2aa").innerHTML = n2aa;
		hh = "Propoção entre Mol de H<sub>2</sub> e número de átomos de H<sub>2</sub>O:<br><br>1 Mol de H<sub>2</sub> --- 6.02 • 10^23 moléculas de H<sub>2</sub>O";
		document.getElementById("hh").innerHTML = hh;
}	else {
		resultado2 = numero2 * o;
		n2b = numero2+" • 0.5 • 6.02 • 10^23 ="+resultado2+" • 10^23";
		document.getElementById("n2a").innerHTML = n2b;
		n2bb = "1/2x = "+numero2*h+" • 10^23 <br><br> x = "+numero2*h+" : 1/2 = "+resultado2;
		document.getElementById("n2aa").innerHTML = n2bb;
		hh = "Propoção entre Mol de O<sub>2</sub> e número de átomos de H<sub>2</sub>O:<br><br>0,5 Mol de O<sub>2</sub> --- 6.02 • 10^23 moléculas de H<sub>2</sub>O";
		document.getElementById("hh").innerHTML = hh;		
} 

//retornar quantas moléculas de água haverá com essa quantia em mol
	
	var retorno2=document.getElementById("resultado2");
	var r2=resultado2.toFixed("2");
	var resultStr2 = document.createTextNode(r2);
	retorno2.appendChild(resultStr2);
	retorno2.innerHTML = "<br>A quantidade de moléculas é de: "+r2+" • 10^23";

}