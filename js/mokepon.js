// Variables Globales

let ataqueJugador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let hipodogeSeleccionado = document.getElementById("Nepenthes Alucinada").checked
    let capipepoSeleccionado = document.getElementById("Dionaea Mechánica").checked
    let ratigueyaSeleccionado = document.getElementById("Drosera Cósmica").checked

    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (Nepenthes_AlucinadaSeleccionado){
        spanMascotaJugador.innerHTML = "Nepenthes Alucinada"
    }else if(Dionaea_MechánicaSeleccionado){
        spanMascotaJugador.innerHTML = "Dionaea Mechánica"
    }else if(Drosera_CósmicaSeleccionado){
        spanMascotaJugador.innerHTML = "Drosera Cósmica"
    }else{
        alert("Debes seleccionar una Mascota")
    }

    seleccionarMascotaEmemigo()
}

function seleccionarMascotaEmemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Nepenthes Alucinada"
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Dionaea Mechánica"
    }else{
        spanMascotaEnemigo.innerHTML = "Drosera Cósmica"
    }

}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES GANASTE")
    }else if(vidasJugador == 0){
        crearMensajeFinal("LO SIENTO PERDISTE")
    }
}

function crearMensaje(resultado){

    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    sectionMensajes.innerHTML = resultado
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelEnemigo.innerHTML = ataqueEnemigo
}

function crearMensajeFinal(resultadoFinal){

    let sectionMensajes = document.getElementById("resultado")
    sectionMensajes.innerHTML= resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}
function ataqueFuego() {
    const audio = new Audio('assets/sonido-fuego.mp3');
    audio.play();
    // Resto del código...
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego)