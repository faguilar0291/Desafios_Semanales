//Pedimos en pantalla que se elija el personaje

/*
Punto1 mostrar un promp y almacenamos la respuesta en una variable
let personaje = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
*/
let personaje = "";

// buscamos el span y lo almacenamos en una variable para luego usarlo
let span = document.querySelector("span");

//validamos el texto ingresado para seleccionar el personaje
// Puntos 2,3,4 y 5

// if (personaje == "Mario") {
//     console.log("Se eligio a Mario!");
//     span.innerText = "Mario";
//     let id_mario = document.querySelector("#mario");
//     id_mario.setAttribute("title", "Presentado");
// } else if (personaje == "Luigi") {
//     console.log("Se eligio a Luigi!");
//     span.innerText = "Luigi";
//     let id_luigi = document.querySelector("#luigi");
//     id_luigi.setAttribute("title", "Presentado");
// } else if (personaje == "Bowser") {
//     console.log("Se eligio a Bowser Morton Koopa!");
//     span.innerText = "Bowser Morton Koopa";
//     let id_bowser = document.querySelector("#bowser");
//     id_bowser.setAttribute("title", "Presentado");
// } else if (personaje == "Peach") {
//     console.log("Se eligio a Princesa Peach Toadstool!");
//     span.innerText = "Princesa Peach Toadstool";
//     let id_peach = document.querySelector("#peach");
//     id_peach.setAttribute("title", "Presentado");
// } else if (personaje == "Yoshi") {
//     console.log("Se eligio a T. Yoshisaur Muchakoopas!");
//     span.innerText = "T. Yoshisaur Muchakoopas";
//     let id_yoshi = document.querySelector("#yoshi");
//     id_yoshi.setAttribute("title", "Presentado");
// } else if (personaje == "Toad") {
//     console.log("Se eligio a Toad!");
//     span.innerText = "Toad";
//     let id_toad = document.querySelector("#toad");
//     id_toad.setAttribute("title", "Presentado");
// } else if (personaje == "Toadette") {
//     console.log("Se eligio a Toadette!");
//     span.innerText = "Toadette";
//     let id_toadette = document.querySelector("#toadette");
//     id_toadette.setAttribute("title", "Presentado");
// } else if (personaje == "Daisy") {
//     console.log("Se eligio a Princesa Daisy!");
//     span.innerText = "Princesa Daisy";
//     let id_daisy = document.querySelector("#daisy");
//     id_daisy.setAttribute("title", "Presentado");
// } else { //cuando no se encuentra un personaje conocido se informa que es desconocido
//     console.log("Ingrese un nombre correcto!");
//     span.innerText = "Desconocido";
// }


//Obtengo en un const los div de todos los personajes
const resetearPersonaje = document.querySelectorAll("#cajas div");

let flag = 0;

// función para botón punto 6
const botonPresentar = document.querySelector(".boton_presentar");
botonPresentar.onclick = mostrarPrompt;

//////////////////////////////////////////////////////////////////////////////////////
///////////                   FUNCIONES                                 /////////////
/////////////////////////////////////////////////////////////////////////////////////

function mostrarPrompt(){

    personaje = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log(personaje);

    selectorPersonaje();

    //borramos el div luego de que se presenta un personaje
    // botonPresentar.parentNode.removeChild(botonPresentar);

    //Bonus 1
    //con el flag verificamos si se presento un personaje conocido anteriormente
    //y quitamos el title para poder presentar a otro
    if (flag > 1){
        console.log(flag);
        console.log(resetearPersonaje.length);
        for (let i = 0; i < resetearPersonaje.length; i++){
            resetearPersonaje[i].setAttribute("title", "");
        }
        selectorPersonaje();
    }


}

function selectorPersonaje(){

    //Identifica si anteriormente se ingreso un personaje NO válido
    //Y en caso de ser así indica al flag un valor mayor a 1 para
    //poder mostrar el nuevo personaje a elegir
    if (span.innerText == "Desconocido"){
        flag = 2;
    }
    if (personaje == "Mario") {
        console.log("Se eligio a Mario!");
        span.innerText = "Mario";
        let id_mario = document.querySelector("#mario");
        id_mario.setAttribute("title", "Presentado");
        //se agrega el flag para saber si previamente se presentó
        //un personaje conocido
        flag += 1;
    } else if (personaje == "Luigi") {
        console.log("Se eligio a Luigi!");
        span.innerText = "Luigi";
        let id_luigi = document.querySelector("#luigi");
        id_luigi.setAttribute("title", "Presentado");
        flag += 1;
    } else if (personaje == "Bowser") {
        console.log("Se eligio a Bowser Morton Koopa!");
        span.innerText = "Bowser Morton Koopa";
        let id_bowser = document.querySelector("#bowser");
        id_bowser.setAttribute("title", "Presentado");
        flag += 1;
    } else if (personaje == "Peach") {
        console.log("Se eligio a Princesa Peach Toadstool!");
        span.innerText = "Princesa Peach Toadstool";
        let id_peach = document.querySelector("#peach");
        id_peach.setAttribute("title", "Presentado");
        flag += 1;
    } else if (personaje == "Yoshi") {
        console.log("Se eligio a T. Yoshisaur Muchakoopas!");
        span.innerText = "T. Yoshisaur Muchakoopas";
        let id_yoshi = document.querySelector("#yoshi");
        id_yoshi.setAttribute("title", "Presentado");
        flag += 1;
    } else if (personaje == "Toad") {
        console.log("Se eligio a Toad!");
        span.innerText = "Toad";
        let id_toad = document.querySelector("#toad");
        id_toad.setAttribute("title", "Presentado");
        flag += 1;
    } else if (personaje == "Toadette") {
        console.log("Se eligio a Toadette!");
        span.innerText = "Toadette";
        let id_toadette = document.querySelector("#toadette");
        id_toadette.setAttribute("title", "Presentado");
        flag += 1;
    } else if (personaje == "Daisy") {
        console.log("Se eligio a Princesa Daisy!");
        span.innerText = "Princesa Daisy";
        let id_daisy = document.querySelector("#daisy");
        id_daisy.setAttribute("title", "Presentado");
        flag += 1;
    } else { //cuando no se encuentra un personaje conocido se informa que es desconocido
        console.log("Ingrese un nombre correcto!");
        span.innerText = "Desconocido";
        //el flag se vuelve a cero para que no se oculte el personaje previo
        flag = 0;
    }

}

//Bonus 2

function presentarMario(){
    let id_mario = document.querySelector("#mario");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Mario";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1){
            id_mario.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Mario";
        selectorPersonaje();
        console.log(flag);
    }
};

function presentarLuigi(){
    let id_luigi = document.querySelector("#luigi");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Luigi";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_luigi.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Luigi";
        selectorPersonaje();
        console.log(flag);
    }
};

function presentarBowser(){
    let id_bowser = document.querySelector("#bowser");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Bowser";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_bowser.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Bowser";
        selectorPersonaje();
    }
};

function presentarPeach(){
    let id_peach = document.querySelector("#peach");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Peach";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_peach.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Peach";
        selectorPersonaje();
    }
};

function presentarYoshi(){
    let id_yoshi = document.querySelector("#yoshi");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Yoshi";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_yoshi.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Yoshi";
        selectorPersonaje();
    }
};

function presentarToad(){
    let id_toad = document.querySelector("#toad");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Toad";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_toad.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Toad";
        selectorPersonaje();
    }
};

function presentarToadette(){
    let id_toadette = document.querySelector("#toadette");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Toadette";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_toadette.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Toadette";
        selectorPersonaje();
    }
};

function presentarDaisy(){
    let id_daisy = document.querySelector("#daisy");

    if (span.innerText != "") {
        span.innerText = "";
        for (let i = 0; i < resetearPersonaje.length; i++) {
            resetearPersonaje[i].setAttribute("title", "");
        }
        personaje = "Daisy";
        selectorPersonaje();
        console.log(flag);
        if (flag > 1) {
            id_daisy.setAttribute("title", "");
            span.innerText = "";

        }
    } else {
        personaje = "Daisy";
        selectorPersonaje();
    }
};

