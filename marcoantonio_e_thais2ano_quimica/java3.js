var botao3 = document.getElementById("btOk3");

	botao3.onclick = function ()	{
		var h2 = document.getElementById('h2').value;
		var o2 = document.getElementById('o2').value;

	h=parseFloat(h2);
	o=parseFloat(o2);

	var resulth;
	var resulto;
	var retornoresult;
	var r;
	var resultStr;	
	var resposta;


	resulth = h*18;	
	ograma = o*32;
	resulto = ograma*18/16; 	
	
	if (resulth>resulto){
		resposta="<br><br>"+h+"g de H<sub>2</sub> produz(em) "+h+" Mol de H<sub>2</sub>O("+resulth+"g)<br><br>"+o+" Mol de O<sub>2</sub> produz(em) "+o*2+" Mol de H<sub>2</sub>O("+resulto+"g)<br><br>O reagente em excesso é o hidrogênio, e o limitante é o oxigênio.<br><br><br><strong>ATENÇÃO, VALORES ARREDONDADOS</strong>";
		document.getElementById("h").innerHTML=resposta;
	} else if(resulto>resulth){
		resposta="<br><br>"+h+"g de H<sub>2</sub> produz(em) "+h+" Mol de H<sub>2</sub>O("+resulth+"g)<br><br>"+o+" Mol de O<sub>2</sub> produz(em) "+o*2+" Mol de H<sub>2</sub>O("+resulto+"g)<br><br>O reagente em excesso é o oxigênio, e o limitante é o hidrogênio.<br><br><br><strong>ATENÇÃO, VALORES ARREDONDADOS</strong>";
		document.getElementById("h").innerHTML=resposta;
	} else {
		resposta="<br><br>"+h+"g de H<sub>2</sub> produz(em) "+h+" Mol de H<sub>2</sub>O("+resulth+"g)<br><br>"+o+" Mol de O<sub>2</sub> produz(em) "+o*2+" Mol de H<sub>2</sub>O("+resulto+"g)<br><br>Não há reagentes limitante ou em excesso.<br><br><br><strong>ATENÇÃO, VALORES ARREDONDADOS</strong>";
		document.getElementById("h").innerHTML=resposta;
	}
}
/*

	
	var form3 = "Se 1 grama de H2 forma 9 gramas de H2O,<br>1 grama H2 ---> 9 gramas de H2O<br>"+gH2+" gramas H2 ---> X gramas H2O";
	var conta3 = "X gramas H2O = ("+g1H2O+" x "+gH2+") /"+g1H2;
	var res3 = "Resultado: X gramas H2O= "+h2oeh2;
	var result3 = gH2+" gramas de H2 forma(m) "+h2oeh2+" gramas de H2O";
	document.getElementById("formula3").innerHTML = form3;
	document.getElementById("conta3").innerHTML = conta3;
	document.getElementById("resul3").innerHTML = res3;
	document.getElementById("resultado3").innerHTML = result3;

	
	var form31 = "Se 0,5 gramas de O2 forma 9 grama de H2O,<br>0,5 gramas O2 ---> 1 gramas de H2O<br>"+gO2+" gramas O2 ---> X gramas H2O";
	var conta31 = "X gramas H2O = ("+g1H2O+" x "+gO2+") /"+g1O2;
	var res31 = "Resultado: X gramas H2O= "+h2oeo2;
	var result31 = gO2+" gramas de O2 formam "+h2oeo2+" gramas de H2O";
	document.getElementById("formula3-1").innerHTML = form31;
	document.getElementById("conta3-1").innerHTML = conta31;
	document.getElementById("resul3-1").innerHTML = res31;
	document.getElementById("resultado3-1").innerHTML = result31;

	if( h2oeh2 > h2oeo2 ){
		var limitanteexcedente = "O reagente limitante nessa correlação é o Oxigênio, enquanto o reagente excedente é o Hidrogênio.";
		document.getElementById("textofinal").innerHTML = limitanteexcedente;
		var produto = h2oeo2;
	}
	else if( h2oeh2 < h2oeo2 ){
		var limitanteexcedente = "O reagente limitante nessa correlação é o Hidrogênio, enquanto o reagente excedente é o Oxigênio.";
		document.getElementById("textofinal").innerHTML = limitanteexcedente;
		var produto = h2oeh2;
	}
	else{
		var sem = "Não há reagente limtante e nem excedente.";
		document.getElementById("textofinal").innerHTML = sem;
		var produto = h2oeo2;
	}
	var produtofinal = "Nesse caso, o produto final é igual a "+produto+" gramas de H2O";
	document.getElementById("produtofinal").innerHTML = produtofinal;
}*/