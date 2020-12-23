function pares (x, y){
    for (x; x<= y; x++){
        if (x% 2 == 0 ){
            document.getElementById("retorno").innerHTML += x+"; <br>";
        }
    }
}pares(1, 100);