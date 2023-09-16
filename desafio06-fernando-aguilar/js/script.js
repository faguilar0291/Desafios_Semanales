console.log("Bienvenidos al Ejercicio 1 del Desafio 6");
let catNum = prompt("Ingrese la cantidad de Gatos que desea ver: ",
"Para finalizar ingrese 0 o un valor mayor a 10");
console.log("El valor ingresado es:", catNum);


while (catNum > 0 && catNum <= 10) {
        switch (catNum) {
                case "1": 
                console.log("Gato #1: 😺");
                break;
                case "2": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                break;
                case "3": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                break;
                case "4": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                break;
                case "5": console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                break;
                case "6": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                break;
                case "7": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                console.log("Gato #7: 😺");
                break;
                case "8": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                console.log("Gato #7: 😺");
                console.log("Gato #8: 😸");
                break;
                case "9": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                console.log("Gato #7: 😺");
                console.log("Gato #8: 😸");
                console.log("Gato #9: 😹");
                break;
                case "10": 
                console.log("Gato #1: 😺");
                console.log("Gato #2: 😸");
                console.log("Gato #3: 😹");
                console.log("Gato #4: 😺");
                console.log("Gato #5: 😸");
                console.log("Gato #6: 😹");
                console.log("Gato #7: 😺");
                console.log("Gato #8: 😸");
                console.log("Gato #9: 😹");
                console.log("Gato #10: 😺");
                break;
                
                default:
                break;
                }
                catNum = prompt("Ingrese la cantidad de Gatos que desea ver: ", 
                "Para finalizar ingrese 0 o un valor mayor a 10") ;
                console.log("El valor ingresado es:", catNum);
};

if (catNum < 1 || catNum > 10){
        alert("Finalizamos el juego!")
}