console.log("Bienvenidos al Ejercicio 2 del Desafio 6");
let catNum = prompt("Ingrese la cantidad de Gatos que desea ver: ");
console.log("El valor ingresado para la cantidad de gatos es:", catNum);

let catSteps = prompt("Ingrese la cantidad de pasos que desea ver: ",
"Para finalizar ingrese 0 o un valor mayor a 10");
console.log("El valor ingresado para la cantidad de pasos es:", catSteps);

let cats = "🐈";
let steps;


switch(catSteps) {
    case "1":
        steps = "🐾"
        break;
    case "2":
        steps = "🐾🐾"
        break;
    case "3":
        steps = "🐾🐾🐾"
        break;
    case "4":
        steps = "🐾🐾🐾🐾"
        break;
    case "5":
        steps = "🐾🐾🐾🐾🐾"
        break;
    case "6":
        steps = "🐾🐾🐾🐾🐾🐾"
        break;
    case "7":
        steps = "🐾🐾🐾🐾🐾🐾🐾"
        break;
    case "8":
        steps = "🐾🐾🐾🐾🐾🐾🐾🐾"
        break;
    case "9":
        steps = "🐾🐾🐾🐾🐾🐾🐾🐾🐾"
        break;
    case "10":
        steps = "🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾"
        break;
    default:
        break;

}

for (i = 0; i < catNum; i++){
    console.log("Gato #", i, ":", cats, steps);
}
