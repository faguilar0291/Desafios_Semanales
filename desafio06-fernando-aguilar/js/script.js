console.log("Bienvenidos al Ejercicio 1 del Desafio 6");
let catNum = prompt("Ingrese la cantidad de Gatos que desea ver: ") ;
console.log("El valor ingresado es:", catNum);
for (let i = 1; i <= catNum; i++) {
    catCounter = i;
    console.log(catCounter);
    switch (catCounter) {
        case 1: console.log("Gato #1: 😺");
                break;
        case 2: console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                break;
                
        case 3: console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                break;
        case 4: console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                break;
        case 5: console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                break;
        case 6: console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                break;
        case 7: console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                console.log("Gato #7: 😺");
                break;
        
        default:
            break;
    }
}


