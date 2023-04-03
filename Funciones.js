//Muestra el array en el html
listarProductosHTML(ViodeoJuegos)

function listarProductosHTML(array) {
    const tabla = document.querySelector("tbody")
        tabla.innerHTML = ""
        array.forEach((Juego) => {
            tabla.innerHTML += `<tr>
                                    <td>${Juego.ProductoId}</td>
                                    <td>${Juego.Producto}</td>
                                    <td>${Juego.Genero}</td>
                                    <td>$ ${Juego.Precio.toLocaleString()}</td>
                                <tr>`            
        })
}

//Boton de filtrado por genero
//function Filtrar(){
//let BuscoGenero = prompt ("Ingrese el genero que desea buscar:").toUpperCase().trim()
//    let resultado = ViodeoJuegos.filter((Juego)=>{
//        return Juego.Genero  === BuscoGenero
//    })
//    if (resultado.length > 0){
//        listarProductosHTML(resultado)
//    }else{
//        alert ("No se encontro un resultado")
//    }
//}

//Boton de filtrado por nombre
//function FiltrarIndividual(){
//    let BuscoProducto = prompt ("Ingrese el nombre del producto:").toLowerCase()
//    let resultadoIndividual = ViodeoJuegos.filter((Juego)=>{
//        return Juego.Producto  === BuscoProducto
//    })
//    if (resultadoIndividual.length > 0){
//        listarProductosHTML(resultadoIndividual)
//    }else{
//        alert ("No se encontro el producto")
//    }
//}

//Boton de filtrado por ID
//function FiltrarId(){
//    let BuscoId = prompt ("Ingrese el nombre del producto:")
//    let resultadoId = ViodeoJuegos.filter((Juego)=>{
//        return Juego.ProductoId  === parseInt(BuscoId)
//    })
//    if (resultadoId.length > 0){
//        listarProductosHTML(resultadoId)
//    }else{
//        alert ("No se encontro el ID")
//    }
//}

//Boton de reinicio
//let reinicio = true
//function Restart(){
//    while(reinicio){
//        listarProductosHTML(ViodeoJuegos)
//        reinicio = false
//    }
//    reinicio = true
//}

//Boton compra
function IniciarCompra(){
    debugger
    let IndicarId = parseInt(prompt ("Ingre el ID de la prenda que desea comprar \n" +
                            "Ej: 1234"))
    if (IndicarId === undefined){
        /* ¡IMPORTANTE! Si la variable IndicarId no es una id que corresponde al array esta toma el valor de undefine,
        pero por alguna razon no toma el camino para volver a ingresar otro id, intente varios metodos para solucionar el problema
        pero no logre dar con una solucion definitiva :(
        */
        Alert ("No se encontro el producto")
        let reintentar = Confirm ("¿Desea intentar de nuevo?")
        if(reintentar === true){
            iniciarCompra()
        }else{
            alert ("Se canselo la compra")
        }
    }else{
        let JuegoSeleccionado = BuscarVideojuego(IndicarId)
            if (JuegoSeleccionado !== undefined){
                alert (`El videojuego ${JuegoSeleccionado.Producto} se agrego al carrito`)
                carrito.push(JuegoSeleccionado)
                    let SeguirComprando = confirm ("¿Desea comprar mas?")
                        if(SeguirComprando === true){
                            IniciarCompra()
                        }else{
                            TerminarCompra()
                        }
            }
}
}
function BuscarVideojuego(IndicarId){
    let Resultado = ViodeoJuegos.find((juego)=> juego.ProductoId === parseInt(IndicarId))
    return Resultado
}

function TerminarCompra(){
    if(carrito.length > 0){
        const Biblioteca = new compra (carrito)
            alert(`El precio total del carrito es $ ${Biblioteca.PrecioTotal()}`)
            let Pregunta = confirm("Confirmar pago")
                if(Pregunta === true){
                    alert (Biblioteca.FinalizarCompra())
                    carrito.length = 0
                }else{
                    alert("Se cancelo la compra")
                    carrito.length = 0
                }
        }
}

/*Codigo de prueba:*/

/*function IniciarCompra(){
    const IndicarId = parseInt (prompt ("Ingrese el ID del producto"))
    if (IndicarId === undefined){
            alert ("No se encontro el producto")
            let Reintentar = confirm ("¿Desea intentar de nuevo?")
            if (Reintentar === true){
                IniciarCompra()
            }else{
                Alert("Error en la transaccion")
            }
        }else{
           let Resultado = ViodeoJuegos.find((juego)=>{
            return juego.id === parseInt(IndicarId)
           })

        }
       // alert = (`Se agrego ${ViodeoJuegos.Producto} al carrito`)
}
*/