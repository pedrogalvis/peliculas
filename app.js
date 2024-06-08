
var contenedorPelis = document.getElementById("listaPeliculas");

var listaImagenes = [
  "https://es.web.img3.acsta.net/medias/nmedia/18/72/16/76/20065616.jpg",
  "https://www.ecartelera.com/carteles/5200/5270/001_p.jpg",
  "https://es.web.img2.acsta.net/medias/nmedia/18/78/91/51/20076377.jpg",
  "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/638724.jpg",
  "https://image.tmdb.org/t/p/original/fE0KOXDV5QkUJxw5oLSLEdFUPZq.jpg",
  "https://mx.web.img2.acsta.net/r_1280_720/pictures/14/04/28/11/11/012699.jpg"
];

var listaTitulos = [
  "Matrix",
  "Matrix: Recargado",
  "Matrix: Revoluciones",
  "Volver al futuro",
  "Volver al futuro 2",
  "Volver al futuro 3"
];

var listaAvances = ["https://youtu.be/vKQi3bBA1y8?si=8hOwX6NS7xnam-Vx", "https://youtu.be/kYzz0FSgpSU?si=6dgYv3qZvQNq22JV", "https://youtu.be/hMbexEPAOQI?si=kBP8YHqKynHSqzm1", "https://youtu.be/qvsgGtivCgs?si=hh2geaSJhClQlwAj", "https://youtu.be/MdENmefJRpw?si=Za1DUBWG2yhoM2fd", "https://youtu.be/3C8c3EoEfw4?si=oUL7PNVqwoxShNR_"];

function cargarPelis() {
  for(i=0; i < listaImagenes.length; i++ ){
    contenedorPelis.innerHTML = contenedorPelis.innerHTML + "<div><a href=" + listaAvances[i] + " target='_blank'><img class='poster' src=" + listaImagenes[i] + "></a><p>" + listaTitulos[i] + "</p></div>";
  }
}

cargarPelis()

function agregarPelicula(){
  var peliculaFavorita = document.getElementById("pelicula").value;
  var tituloPelicula = document.getElementById("titulo").value;
  var avancePelicula = document.getElementById("avance").value;
  
  if (peliculaFavorita && tituloPelicula && avancePelicula) {
  
  if (peliculaFavorita.endsWith("jpg") || peliculaFavorita.endsWith("jpeg")){
   
    listaImagenes.push(peliculaFavorita);
    listaTitulos.push(tituloPelicula);
    listaAvances.push(avancePelicula);
  
    contenedorPelis.innerHTML = "";
    cargarPelis();
    document.getElementById("pelicula").value = "";
  document.getElementById("titulo").value = "";
  document.getElementById("avance").value = "";  
} else { alert("Extensión de imágen incorrecta")}
}  else {
  alert("Por favor llene todos los campos");
}}

function quitarPelicula(){
  contenedorPelis.removeChild(contenedorPelis.lastElementChild);
}

