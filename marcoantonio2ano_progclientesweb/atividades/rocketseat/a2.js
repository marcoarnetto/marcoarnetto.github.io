 function chamaF(){
var a = document.getElementById('e1').value; 
var b = document.getElementById('e2').value; 

a = parseInt(a);
b = parseInt(b);

var i=0;
var r=array[i];

    for(a; a<=b; a++) {
        if(a%2==0) {
        r[i]= a+"<br>";
        }
        i++; 
       
    }
    var retorno=document.getElementById("retorno");
    var resultado=r;
    var resultStr = document.createTextNode(resultado);
    retorno.appendChild(resultStr)
    retorno.innerHTML = "";
    retorno.appendChild(resultStr)
}