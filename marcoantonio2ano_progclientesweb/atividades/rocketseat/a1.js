 function chamaF() {

    var e = {  
    0: "Rua dos pinheiros",  
    1: 1293, 
    2: "Centro",  
    3: "São Paulo",  
    4: "SP"
}
   retor = "O usuário mora em "+e[3]+" / " +e[4]+ ", no bairro "+e[2]+", na rua "+e[0]+" comnº "+e[1]+".";
   var retorno=document.getElementById("retorno");
   var r=retor;
   var resultStr = document.createTextNode(r);
   retorno.appendChild(resultStr)
   retorno.innerHTML = "";
   retorno.appendChild(resultStr);
}