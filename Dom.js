//Titulos
const titulo = document.getElementById("Titulo")
const Catalogo = document.getElementById("Catalogo")
const alumno = document.getElementById("alumno")
const comision = document.getElementById("comision")

titulo.innerText= "Gaming word 🎮"
Catalogo.innerText= "Catalogo de videojuegos"
alumno.innerText= "Alumnno: Tomas Giardullo"
comision.innerText= "Comisión JavaScript 39470"

//Barra de busqueda

const Buscador = document.querySelector("input#Buscador")

Buscador.addEventListener("search", ()=>{
    let Busqueda = videojuegos.filter((juego)=>juego.Producto.includes(Buscador.value))
    if(Busqueda.length > 0){
        CargarJuegos(Busqueda)
    } else {
        CargarJuegos()
    }
});
//Boton ver carrito

const VerCarrito = document.getElementById("boton")
      VerCarrito.addEventListener("click", ()=>{location.href = `Carrito.html`})


//Cargar cards con el array
function CargarJuegos(juegos = videojuegos){
    contenido.innerHTML = ''
    juegos.forEach((juego)=>{
       contenido.innerHTML += retornoCardHTML(juego)
    })
}

CargarJuegos()

function retornoCardHTML(videojuegos){
    return `<div class="card">
                <figure>
                    <img src=${videojuegos.Imagen}>
                </figure>
                <div class="contenido">
                    <h3>${videojuegos.Producto}</h3>
                    <P>$${videojuegos.Precio}</P>
                    <button class="boton" id="${videojuegos.ProductoId}">Agregar al carrito</button>
                </div>
            </div>`
}

//Botones Agrregar al carrito

function BotonesDeCards(){
    const AgregarAlCarrito = document.querySelectorAll("button.boton")
    for(boton of AgregarAlCarrito) {
        boton.addEventListener("click",(info)=>{
            let CardId = parseInt(info.target.id)
            let resultado = videojuegos.find((juegos) => juegos.ProductoId === CardId)
            carrito.push(resultado)
            //Guardo al local storage
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    }
}
BotonesDeCards()



