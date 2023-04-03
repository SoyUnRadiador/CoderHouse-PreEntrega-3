//Titulos
const titulo = document.getElementById("Titulo")
const Catalogo = document.getElementById("Catalogo")

titulo.innerText= "Gaming word 🎮"
Catalogo.innerText= "Tu carrito"

//Cargar cards del carrito

function CargarJuegosCarrito(){
  contenido.innerHTML = ""
  let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || []
  carrito = carritoGuardado
  carrito.forEach((juegos)=>{
     contenido.innerHTML += retornoCardCarritoHTML(juegos)
  })
  asignarEventosEliminar()
}

CargarJuegosCarrito()

function retornoCardCarritoHTML(carrito){
  if (carrito && carrito.Imagen) {
      return `<div class="card">
                  <figure>
                      <img src=${carrito.Imagen}>
                  </figure>
                  <div class="contenido">
                      <h3>${carrito.Producto}</h3>
                      <P>$${carrito.Precio}</P>
                      <button class="boton" id="${carrito.ProductoId}">Eliminar</button>
                  </div>
              </div>`
  }
  return "";
}

//Botones Eliminar del carrito

function eliminarProductoDeCarrito(id) {
  carrito = carrito.filter((juegos) => juegos && juegos.ProductoId && juegos.ProductoId !== id)
  //Recupero los datos del local storage
  localStorage.setItem('carrito', JSON.stringify(carrito))
  CargarJuegosCarrito()
}


function asignarEventosEliminar() {
  const botonesEliminar = document.querySelectorAll(".boton")
  for (let i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].addEventListener("click", function() {
      let id = parseInt(this.getAttribute("id"))
      eliminarProductoDeCarrito(id)
    })
  }
}
  
  
  function eliminarProducto(event) {
    const CardId = parseInt(event.target.id)
    eliminarProductoDeCarrito(CardId)
  }
  
  asignarEventosEliminar()

  //Boton comprar

const comprar = document.getElementById("ConfirmarCompra")
      comprar.addEventListener("click", CalcularPrecio)

function CalcularPrecio() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito")
  } else {
    const total = carrito.reduce((acumulado, juego) => acumulado + juego.Precio, 0)
    let Confirmacion = confirm(`El precio total es: $${total}\n¿Desea Proceder con la compra?`)
  if (Confirmacion === true) {
    alert("¡Gracias por comprar en Gaming word 🎮!")
    carrito = []
    localStorage.setItem('carrito', JSON.stringify(carrito))
    CargarJuegosCarrito()
    }
  }
}