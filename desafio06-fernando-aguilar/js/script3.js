console.log("Bienvenidos al Ejercicio 2 del Desafio 6");

let catNum = prompt("Ingrese la cantidad de Gatos que desea ver: ",
    "Para finalizar ingrese 0");
console.log("El valor ingresado para la cantidad de gatos es:", catNum);

let catSteps;

if (catNum == 0) {
    console.log("Ha ingresado 0, finalizamos el juego!");
    document.write("<p> Ha ingresado 0, finalizamos el juego! </p>");
} else {
    catSteps = prompt("Ingrese la cantidad de pasos que desea ver: ");
    console.log("El valor ingresado para la cantidad de pasos es:", catSteps);
}

let cats = "";

if (catNum > 0 && catSteps > 0) {

    for (let i = 1; i <= catNum; i++) {
        let steps = "";
        if (i % 2 != 0) {
            cats = "🐈‍";
        } else {
            cats = "🐈‍⬛";
        }
        for (let j = 0; j < catSteps; j++) {
            steps += "🐾";
        }
        console.log("Gato #", i, ": ", cats, steps);
        document.write("<p> Gato #", i, ": ", cats, steps, " </p>")
    }
}
