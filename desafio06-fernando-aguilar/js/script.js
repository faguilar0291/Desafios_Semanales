console.log("Bienvenidos al Ejercicio 1 del Desafio 6");

let emoji = "";
let contador = 0;
let catNum = prompt("Ingrese la cantidad de Gatos que desea ver: ",
"Para finalizar ingrese 0");

if (catNum > 0){
    for (let i = 1; i <= catNum; i++){
        contador++;
        if (contador == 1) {
            emoji = "😺";
        } else if ((contador % 2) == 0) {
            emoji = "😸";
        } else if (contador % 3 == 0) {
            emoji = "😹";
            contador = 0;
        }
        console.log("Gato #", i, ": ", emoji);
        document.write("<p>Gato #", i, ": ", emoji, " </p>");
    }

} else {
    console.log("El valor ingresado es --> 0, finalizamos el juego",catNum)
}