alert("bienvenido a Gaming Word, tu tienda de videojuegos favorita")
//Uso de funcion while para realizar varias compras
let continuar = true

function iniciarCompra() {
    while (continuar) {
        ProcesoCompra()
        continuar = confirm("Desea comprar mas juegos")
    }
}

function ProcesoCompra() {
    let catalogo = prompt("Ingrese el genero del videojuego que busca: \n" +
        "a) 💥Acccion \n" +
        "b) 🌎Aventura \n" +
        "c) 👾Arcade \n" +
        "d) ♟️Estrategia \n" +
        "e) ⚽Deportes \n").toLowerCase().trim()

    if (catalogo !== "a" && catalogo !== "b" && catalogo !== "c" && catalogo !== "d" && catalogo !== "e") {
        alert("El dato ingresado no corresponde a ningun genero del catalogo")
    }
    else {
        switch (catalogo) {
            case "a":
                let Accion = prompt("Ingrese el ID del juego que busca:\n" +
                    "a) DOOM Ethernal \n" +
                    "b) Call Of Duty MW2 \n" +
                    "c) God of war ragnarok \n" +
                    "d) Batlefield 2043 \n" +
                    "e) Red dead redemption 2 \n").toLowerCase().trim()

                if (Accion !== "a" && Accion !== "b" && Accion !== "c" && Accion !== "d" && Accion !== "e") {
                    alert("El dato ingresado no corresponde a ningun videojuego")
                    break
                } else {
                    switch (Accion) {
                        case "a":
                            alert("Gracias por comprar DOOM Ethernal")
                            break
                        case "b":
                            alert("Gracias por comprar Call Of Duty MW2")
                            break
                        case "c":
                            alert("Gracias por comprar God of war ragnarok")
                            break
                        case "d":
                            alert("Gracias por comprar Batlefield 2043")
                            break
                        case "e":
                            alert("Gracias por comprar Red dead redemption 2")
                            break
                    }
                    break
                }
            case "b":
                let Aventura = prompt("Ingrese el ID del juego que busca:\n" +
                    "a) Uncharted 4 \n" +
                    "b) Death stranding \n" +
                    "c) Minecraft \n" +
                    "d) Terraria \n" +
                    "e) Rayman \n").toLowerCase().trim()
                if (Aventura !== "a" && Aventura !== "b" && Aventura !== "c" && Aventura !== "d" && Aventura !== "e") {
                    alert("El dato ingresado no corresponde a ningun videojuego")
                    break
                } else {
                    switch (Aventura) {
                        case "a":
                            alert("Gracias por comprar Uncharted 4")
                            break
                        case "b":
                            alert("Gracias por comprar Death stranding")
                            break
                        case "c":
                            alert("Gracias por comprar Minecraft")
                            break
                        case "d":
                            alert("Gracias por comprar Terraria")
                            break
                        case "e":
                            alert("Gracias por comprar Rayman")
                            break
                    }
                    break
                }
            case "c":
                let arcade = prompt("Ingrese el ID del juego que busca:\n" +
                    "a) Pacman \n" +
                    "b) Donkey kong \n" +
                    "c) Sonic \n" +
                    "d) Space invaders\n" +
                    "e) Mario bros \n").toLowerCase().trim()
                if (arcade !== "a" && arcade !== "b" && arcade !== "c" && arcade !== "d" && arcade !== "e") {
                    alert("El dato ingresado no corresponde a ningun videojuego")
                    break
                } else {
                    switch (arcade) {
                        case "a":
                            alert("Gracias por comprar Pacman")
                            break
                        case "b":
                            alert("Gracias por comprar Donkey kong")
                            break
                        case "c":
                            alert("Gracias por comprar Sonic")
                            break
                        case "d":
                            alert("Gracias por comprar Space invaders")
                            break
                        case "e":
                            alert("Gracias por comprar Mario bros")
                            break
                    }
                    break
                }
            case "d":
                let Estrategia = prompt("Ingrese el ID del juego que busca:\n" +
                    "a) Ajedrez \n" +
                    "b) War craft \n" +
                    "c) Age of empires \n" +
                    "d) Xcom \n" +
                    "e) Damas \n").toLowerCase().trim()
                if (Estrategia !== "a" && Estrategia !== "b" && Estrategia !== "c" && Estrategia !== "d" && Estrategia !== "e") {
                    alert("El dato ingresado no corresponde a ningun videojuego")
                    break
                } else {
                    switch (Estrategia) {
                        case "a":
                            alert("Gracias por comprar Ajedrez")
                            break
                        case "b":
                            alert("Gracias por comprar War craft")
                            break
                        case "c":
                            alert("Gracias por comprar Age of empires")
                            break
                        case "d":
                            alert("Gracias por comprar Xcom")
                            break
                        case "e":
                            alert("Gracias por comprar Damas")
                            break
                    }
                    break
                }
            case "e":
                let Deportes = prompt("Ingrese el ID del juego que busca:\n" +
                    "a) NBA 2k23 \n" +
                    "b) Fifa 23 \n" +
                    "c) Madden NFL 23 \n" +
                    "d) WWE 2K23 \n" +
                    "e) PGA TOUR 2K23 \n").toLowerCase().trim()
                if (Deportes !== "a" && Deportes !== "b" && Deportes !== "c" && Deportes !== "d" && Deportes !== "e") {
                    alert("El dato ingresado no corresponde a ningun videojuego")
                    break
                } else {
                    switch (Deportes) {
                        case "a":
                            alert("Gracias por comprar NBA 2k23")
                            break
                        case "b":
                            alert("Gracias por comprar Fifa 23")
                            break
                        case "c":
                            alert("Gracias por comprar Madden NFL 23")
                            break
                        case "d":
                            alert("Gracias por comprar WWE 2K23")
                            break
                        case "e":
                            alert("Gracias por comprar PGA TOUR 2K23")
                            break
                    }
                    break
                }
            default:
                console.error = ("Error 404 not found")


        }

    }
}
