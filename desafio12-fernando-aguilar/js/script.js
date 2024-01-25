const main = document.getElementById("main");

const nav = {
    home: document.getElementById("home"),
    addMovie: document.getElementById("add-movie"),
}

nav.home.addEventListener('click', () => {
    loadContentHtml('home');
})

nav.addMovie.addEventListener('click', () => {
    loadContentHtml('add-movie');
})

function loadContentHtml(pageName) {
    const filepath = './' + pageName + '.html';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filepath);

    xhr.onload = () => {
    if (xhr.status === 200){
        main.innerHTML = xhr.response;
        console.log(main.innerHTML);
    }
};

xhr.send();
}

const sectionMovies = document.getElementsByTagName("section");
const textFinder = document.getElementById("text-finder");
const btnFinder = document.getElementById("btn-finder");

//Movies catalogue
const movies = [
    {
        title: "El señor de los anillos: La comunidad del anillo", 
        description: "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.",
        year: 2001,
    },

    {  
        title: "El Señor de los Anillos: Las dos torres",
        description: "La trama de la película comienza tras la disolución de la Compañía del Anillo. Boromir ha muerto a manos del jefe de los uruk-hai, Lurtz, en un intento de salvar a los hobbits Meriadoc Brandigamo y Peregrin Tuk, que acaban siendo capturados. Frodo Bolsón y Sam Gamyi parten solos hacia Mordor para destruir el Anillo Único en el Monte del Destino, mientras que Aragorn, Gimli y Legolas persiguen a los uruks con el fin de liberar a sus amigos capturados.",
        year: 2002,
    },
    {  
        title: "El Señor de los Anillos: El retorno del Rey",
        description: "La batalla por la Tierra Media ha empezado. Las fuerzas de Saruman han sido destruidas y por primera vez parece que hay una pequeña esperanza. Sin embargo, el poder de Sauron crece y su interés se centra en Gondor, el último reducto de los hombres, cuyo heredero es Aragorn. Mientras, Frodo y Sam, guiados por Gollum, siguen su peligrosa misión a través de Mordor para destruir el anillo.",
        year: 2003,
    },
    {  
        title: "Harry Potter y la piedra filosofal",
        description: "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.",
        year: 2001,
    },
    {  
        title: "Harry Potter y la cámara secreta",
        description: "Terminado el verano, Harry no ve la hora de abandonar la casa de sus odiosos tíos. Inesperadamente se presenta en su dormitorio Dobby, un elfo doméstico, que le anuncia que correrá un gran peligro si vuelve a Hogwarts.",
        year: 2002,
    },
    {  
        title: "Harry Potter y el prisionero de Azkaban",
        description: "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.",
        year: 2004,
    },

];

//This function load the movie data taking the info from the movies object array
function loadMovies(data) {

    data.forEach( (movie) => {
        const div = document.createElement("div");
        sectionMovies.appendChild(div);
        const h3 = document.createElement("h3");
        
        h3.innerText = "- " + movie.title + " -";
        
        div.appendChild(h3);
        
        const p2 = document.createElement("p");
        p2.innerText = "Descripción: " + movie.description;
        div.appendChild(p2);
        
        const p1 = document.createElement("p");
        p1.innerText = "Año: " + movie.year;
        div.appendChild(p1);
    });

}

//The movie list is loaded, when the page is loaded
loadMovies(movies);
//verifying the correct load data
console.log(movies);

//this function filter the movies using the data we put on the input
function loadFilteredMovies(){
    sectionMovies.innerHTML = "";

    const filteredMovies = movies.filter( (movie) => movie.title.includes(textFinder.value) );
    //verifying the correct load data
    console.log(filteredMovies);

    loadMovies(filteredMovies);
}

//when it clicks the button launch the function
btnFinder.onclick = loadFilteredMovies;

const addMovieElement = (title, description, year) => {
    this.title = title;
    this.description = description;
    this.year = year;
}


//me quede en 1:25 video 38










//quede en 0:54hs video clase 36
// ----------------------------------------------------------------------------------------------------
//practica clase 38
//using elements array
//const colores = ['rojo', 'blanco', 'verde', 'negro'];
//console.log("Array colores: ", colores);

//colores.shift(); delete the first element of an array

//colores.pop(); delete the last element of an array

//colores.splice(1, 1); this method can delete an element of an array distinct than the first or the last
//we need to put the position on the array and the quantity of elements we need to remove

//if we have an unknow array of elements and we need to eliminate an element inside, we can use the method 
//indexof(), we must assing the method to an array --> let index = colores.indexOf('verde');
//splice(index, 1)

// let index = colores.indexOf('verde');
// console.log("Indice del color verde: ", index);

// colores.splice(index, 1);
// console.log("Array luego de usar indexOf: ", colores);

// ----------------------------------------------------------------------------------------------------

//Using object arrays --> movies

//console.log("Elemento 0 del array movies: ", movies[0]);

//finding the index "number" or position in the array for an element with findIndex():
//const indexOfTitle = movies.findIndex( (movie) => movie.title === 'El Señor de los Anillos: Las dos torres');
//console.log(indexOfTitle);

//showing the result of finding the index:
//console.log("Indice de la pelicula --> El Señor de los Anillos: Las dos torres", movies[indexOfTitle]);

//applying a filter by coincidence
//const filteredMovies = movies.filter( (movie) => movie.title.includes("e") );
//console.log(filteredMovies);
