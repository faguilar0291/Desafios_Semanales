let formulario = document.querySelector("#form-fullname");

console.log(formulario);

//creamos evento formulario
formulario.addEventListener("submit", obtenerDatosForm)




// funciones

function obtenerDatosForm(e){
    e.preventDefault();
    let nombre1 = document.querySelector("#id-name1").value;
    let nombre2 = document.querySelector("#id-name2").value;
    let apellido1 = document.querySelector("#id-apellido1").value;
    let apellido2 = document.querySelector("#id-apellido2").value;

    console.log(nombre1);
    console.log(nombre2);
    console.log(apellido1);
    console.log(apellido2);

    let respuesta = document.
}