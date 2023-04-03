/*El precio de los video juegos no es el definitivo, en la entrega final 
estos seran cambiados para que se asemejen a la realidad
*/



const videojuegos = [{ProductoId: 1, Imagen: "IMG/doom.jpg", Producto: "doom ethernal", Precio: 1500.00, Genero: "ACCION"},
                    {ProductoId: 2, Imagen:"IMG/Uncharted4.jpg", Producto: "uncharted 4", Precio: 4500.00, Genero: "AVENTURA"},
                    {ProductoId: 3, Imagen: "IMG/CallOfDuty.jpg", Producto: "Call Of Duty MW2", Precio: 5000.00, Genero: "ACCION"},
                    {ProductoId: 4, Imagen:"IMG/DeathStranding.jpg", Producto: "death stranding", Precio: 4500.00, Genero: "AVENTURA"},
                    {ProductoId: 5, Imagen:"IMG/GodOfWar.jpg", Producto: "god of war ragnarok", Precio: 2000.00, Genero: "ACCION"},
                    {ProductoId: 6, Imagen:"IMG/Minecraft.png", Producto: "minecraft", Precio: 2000.00, Genero: "AVENTURA"},
                    {ProductoId: 7, Imagen:"IMG/Battlefield.jpg", Producto: "batlefield 2043", Precio: 3800.00, Genero: "ACCION"},
                    {ProductoId: 8, Imagen:"IMG/Terraria.jpg", Producto: "terraria", Precio: 1500.00, Genero: "AVENTURA"},
                    {ProductoId: 9, Imagen:"IMG/RedDead.jpg", Producto: "red dead redemption 2", Precio: 1500.00, Genero: "ACCION"},
                    {ProductoId: 10, Imagen:"IMG/Rayman.jpg", Producto: "Rayman Legends", Precio: 750.00, Genero: "AVENTURA"},
                    {ProductoId: 11, Imagen:"IMG/Undertale.jpg", Producto: "Undertale", Precio: 500.00, Genero: "ARCADE"},
                    {ProductoId: 12, Imagen:"IMG/CitiesSkylines.jpg", Producto: "Cities Skylines", Precio: 1000.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 13, Imagen:"IMG/DonkeyKong.jpg", Producto: "donkey kong", Precio: 100.00, Genero: "ARCADE"},
                    {ProductoId: 14, Imagen:"IMG/WorldOfWarcraft.jpg", Producto: "Word OF Warcraft", Precio: 400.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 15, Imagen:"IMG/Sonic.jpg", Producto: "sonic", Precio: 100.00, Genero: "ARCADE"},
                    {ProductoId: 16, Imagen:"IMG/AgeOfEmpires.jpg", Producto: "Age Of Empires II", Precio: 1340.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 17, Imagen:"IMG/SpaceInvaders.png", Producto: "space invaders", Precio: 100.00, Genero: "ARCADE"},
                    {ProductoId: 18, Imagen:"IMG/Xcom.jpg", Producto: "xcom 2", Precio: 1000.00, Genero: "ESTRATEGIA"},
                    {ProductoId: 19, Imagen:"IMG/MarioBros.jpg", Producto: "mario bros", Precio: 100.00, Genero: "ARCADE"},
                    {ProductoId: 20, Imagen:"IMG/StarCraft.jpg", Producto: "StarCraft II: Wings of Liberty", Precio: 500.00, Genero: "ESTRATEGIA"}]         
                    
let carrito = [] 

//Tambien pertenece al boton comprar

//class compra{
//    constructor(carrito){
//        this.carrito = carrito
//    }
//    PrecioTotal(){
//        if(this.carrito.lenght > 0){
//            return "Error inesperado"
//        } else {
//            return this.carrito.reduce((acumulador, ViodeoJuegos)=>
//            acumulador + ViodeoJuegos.Precio, 0)
//        }
//    }
//    FinalizarCompra(){
//      if(this.PrecioTotal() !== "Error inesperado"){
//        return `¡La compra de $${this.PrecioTotal()} se realizo con exito!`
//    }else{
//        return `Error en la transaccion.`
//    }
//
//    }
//}