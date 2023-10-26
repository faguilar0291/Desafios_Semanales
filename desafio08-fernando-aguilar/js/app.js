
// Obtenemos los elementos de los enlaces CSS y el botón
const hojaDeEstilo = document.querySelectorAll(".hojas-de-estilos");
console.log(hojaDeEstilo)
let botonEstilos = document.querySelector(".cambiar-estilos");
let botonAleatorio = document.querySelector(".estilos-aleatorios");

// Inicializamos un índice para rastrear el archivo CSS actual
let estiloActual = 1;

if (estiloActual === 1) {
    hojaDeEstilo[0].disabled = false;
    hojaDeEstilo[1].disabled = true;
    hojaDeEstilo[2].disabled = true;
} else if (estiloActual === 2) {
    hojaDeEstilo[0].disabled = true;
    hojaDeEstilo[1].disabled = false;
    hojaDeEstilo[2].disabled = true;
} else if (estiloActual === 3) {
    hojaDeEstilo[0].disabled = true;
    hojaDeEstilo[1].disabled = true;
    hojaDeEstilo[2].disabled = false;
}

// Agregamos un manejador de eventos al botón
botonEstilos.addEventListener("click", cambiarEstilo);
botonAleatorio.addEventListener("click", cambiarEstiloAleatorio);
console.log(estiloActual)


//Cambio de hojas de estilo secuencial
function cambiarEstilo(){
    // Incrementamos el índice del estilo actual
    estiloActual++;

    // Si el índice supera 3, volvemos al primer estilo
    if (estiloActual > 3) {
        estiloActual = 1;
    }

    // Cambiamos el enlace CSS actual en función del índice
    if (estiloActual === 1) {
        hojaDeEstilo[0].disabled = false;
        hojaDeEstilo[1].disabled = true;
        hojaDeEstilo[2].disabled = true;
    } else if (estiloActual === 2) {
        hojaDeEstilo[0].disabled = true;
        hojaDeEstilo[1].disabled = false;
        hojaDeEstilo[2].disabled = true;
    } else if (estiloActual === 3) {
        hojaDeEstilo[0].disabled = true;
        hojaDeEstilo[1].disabled = true;
        hojaDeEstilo[2].disabled = false;
    }
    console.log(estiloActual)
};

//Cambio de hojas de estilo aleatorio
function cambiarEstiloAleatorio(){
    estiloActual = Math.ceil(Math.random() * 3);

    if (estiloActual === 1) {
        hojaDeEstilo[0].disabled = false;
        hojaDeEstilo[1].disabled = true;
        hojaDeEstilo[2].disabled = true;
    } else if (estiloActual === 2) {
        hojaDeEstilo[0].disabled = true;
        hojaDeEstilo[1].disabled = false;
        hojaDeEstilo[2].disabled = true;
    } else if (estiloActual === 3) {
        hojaDeEstilo[0].disabled = true;
        hojaDeEstilo[1].disabled = true;
        hojaDeEstilo[2].disabled = false;
    }
    console.log(estiloActual)
}