const chargingHome = document.getElementById("chargingSelectedHtml");
console.log(chargingHome);

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

const nav = {
    home: document.getElementById("home"),
    addmovies: document.getElementById("addmovies"),
};

loadContentHtml("home");

const links = [nav.home, nav.addmovies];

for (let i = 0; i < links.length; i++) {

    const link = links[i];
    link.addEventListener("click", (e) => {
        e.preventDefault();
        loadContentHtml(e.target.id);
    })
}


function loadContentHtml(pageName) {

    const filepath = "./" + pageName + ".html";
    const xhr = new XMLHttpRequest();
    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
            setActiveLink(links, nav[pageName]);
        }
    };

    xhr.send();
}

function setActiveLink(links, link) {
    for (let i = 0; i < links.length; i++) {
        links[i].className = "";
    }
    link.className = "link-active";
}


//This function load the movie data taking the info from the movies object array
function loadMovies(data) {
    console.log(data);

    const section = document.createElement("section");
    section.classList.add("section-movies");
    chargingHome.append(section);


    data.forEach((movie) => {

        const div = document.createElement("div");
        div.innerHTML = "";
        section.appendChild(div);
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

// Here we load the finder box and the movie list, when the page is loaded
setTimeout(() => {

    const form = document.createElement("form");
    form.classList.add("finder");
    form.innerHTML = `
        <label for="finder" id="label-finder">Encuentra tu película por el titulo</label>
        <input type="text" name="finder" class="text-finder">
        <input type="button" value="search" class="material-symbols-outlined btn-finder">
        `;
    chargingHome.append(form);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Películas disponibles";
    chargingHome.append(h2);

    loadMovies(movies);
}, 200);

//when it clicks the button launch the function
setTimeout(() => {
    const sectionMovies = document.querySelector(".section-movies");
    const textFinder = document.querySelector(".text-finder");
    const btnFinder = document.querySelector(".btn-finder");

    console.log(sectionMovies);
    console.log(textFinder);
    console.log(btnFinder);

    //this function filter the movies using the data we put on the input

    function loadFilteredMovies() {
        console.log("button");
        sectionMovies.innerHTML = "";

        const filteredMovies = movies.filter((movie) => movie.title.includes(textFinder.value));
        //verifying the correct load data
        console.log(filteredMovies);

        loadMovies(filteredMovies);
    }

    btnFinder.onclick = loadFilteredMovies;

}, 200);