// Desafio 07

let title = document.querySelector("title") //Buscamos el texto dentro del Title
console.log(title.innerHTML) // Mostramos por consola el texto dentro del Title

let datosListas = document.querySelectorAll(".dd");
console.log(datosListas);

// Creamos una variable para cargar los datos del 1er integrante

let integrante1 = nombres[0].innerHTML
    + nombres[1].innerHTML + " "
    + apellidos[0].innerHTML + " "
    + apellidos[1].innerHTML;

console.log(nombres);

// Creamos una variable para cargar los datos del 2er integrante

let integrante2 = nombres[2].innerHTML
    + " " + nombres[3].innerHTML + " "
    + apellidos[2].innerHTML + " "
    + apellidos[3].innerHTML;

//Verificamos que los datos se cargan correctamente

// console.log("Datos integrante 1 -->", integrante1);
// console.log("Datos integrante 2 -->", integrante2);


//Mostramos por consola los datos de cada integrante en un recuadro
console.log("", "-----", "\n", "Integrante 1:", integrante1, "\n", "Integrante 2:", integrante2, "\n", "-----");

// Verificamos si los nombres de los integrantes se repiten
let color;

compararNombres(); // esta función reemplaza las líneas comentadas a continuación

// if (nombres[0].textContent === nombres[2].textContent){
//     console.log("Hubo coincidencias de nombres: ", nombres[0].textContent);
//     color = window.prompt("Los nombres se repiten",
//     "Ingrese un color para resaltar las coincidencias");
//     nombres[0].style.backgroundColor = color;
//     nombres[2].style.backgroundColor = color;

// } else if (nombres[1].textContent === nombres[3].textContent){
//     console.log("Hubo coincidencias de nombres: ", nombres[1].textContent);
//     color = window.prompt("Los nombres se repiten",
//     "Ingrese un color para resaltar las coincidencias");
//     nombres[1].style.backgroundColor = color;
//     nombres[3].style.backgroundColor = color;

// } else if (nombres[0].textContent === nombres[3].textContent){
//     console.log("Hubo coincidencias de nombres: ", nombres[0].textContent);
//     color = window.prompt("Los nombres se repiten",
//     "Ingrese un color para resaltar las coincidencias");
//     nombres[0].style.backgroundColor = color;
//     nombres[3].style.backgroundColor = color;

// } else if (nombres[1].textContent === nombres[2].textContent){
//     console.log("Hubo coincidencias de nombres: ", nombres[1].textContent);
//     color = window.prompt("Los nombres se repiten",
//     "Ingrese un color para resaltar las coincidencias");
//     nombres[1].style.backgroundColor = color;
//     nombres[2].style.backgroundColor = color;
// } else {
//    console.log("No se repite ningún nombre")
// }

let compareApellidos = window.confirm("Desea comparar los apellidos?");

//console.log(compareApellidos)

if (compareApellidos) {
    console.log("Vamos a comparar los apellidos");

    compararApellidos(); // esta función reemplaza las líneas comentadas a continuación

    // if (apellidos[0].textContent === apellidos[2].textContent) {
    //     console.log("Hubo coincidencias de apellidos: ", apellidos[0].textContent);
    //     color = window.prompt("Los apellidos se repiten",
    //         "Ingrese un color para resaltar las coincidencias");
    //     apellidos[0].style.backgroundColor = color;
    //     apellidos[2].style.backgroundColor = color;

    // } else if (apellidos[1].textContent === apellidos[3].textContent) {
    //     console.log("Hubo coincidencias de apellidos: ", apellidos[1].textContent);
    //     color = window.prompt("Los apellidos se repiten",
    //         "Ingrese un color para resaltar las coincidencias");
    //     apellidos[1].style.backgroundColor = color;
    //     apellidos[3].style.backgroundColor = color;

    // } else if (apellidos[0].textContent === apellidos[3].textContent) {
    //     console.log("Hubo coincidencias de apellidos: ", apellidos[0].textContent);
    //     color = window.prompt("Los apellidos se repiten",
    //         "Ingrese un color para resaltar las coincidencias");
    //     apellidos[0].style.backgroundColor = color;
    //     apellidos[3].style.backgroundColor = color;

    // } else if (apellidos[1].textContent === apellidos[2].textContent) {
    //     console.log("Hubo coincidencias de apellidos: ", apellidos[1].textContent);
    //     color = window.prompt("Los apellidos se repiten",
    //         "Ingrese un color para resaltar las coincidencias");
    //     apellidos[1].style.backgroundColor = color;
    //     apellidos[2].style.backgroundColor = color;
    // } else {
    //     console.log("No se repite ningún apellido")
    // }
} else {
    console.log("No vamos a comparar los apellidos")
}



function compararNombres() {
    for (let i = 0; i <= 1; i++) {
        for (let j = 2; j <= 3; j++) {
            if (nombres[i].textContent === nombres[j].textContent) {
                console.log("Hubo coincidencias de nombres: ", nombres[i].textContent);
                color = window.prompt("Los nombres se repiten",
                    "Ingrese un color para resaltar las coincidencias");
                nombres[i].style.backgroundColor = color;
                nombres[j].style.backgroundColor = color;
            } else {
                console.log("No hubo coincidencias de nombres entre",
                    nombres[i].textContent, "y",
                    nombres[j].textContent);
            }
        }
    }
}

function compararApellidos() {
    for (let i = 0; i <= 1; i++) {
        for (let j = 2; j <= 3; j++) {
            if (apellidos[i].textContent === apellidos[j].textContent) {
                console.log("Hubo coincidencias de apellidos: ", apellidos[i].textContent);
                color = window.prompt("Los apellidos se repiten",
                    "Ingrese un color para resaltar las coincidencias");
                apellidos[i].style.backgroundColor = color;
                apellidos[j].style.backgroundColor = color;
            } else {
                console.log("No hubo coincidencias de apellidos entre",
                    apellidos[i].textContent, "y",
                    apellidos[j].textContent);
            }
        }
    }
}