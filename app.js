let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSortiados = [];
let numeroMaximo = 10;

function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
   
    if (numeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos ===1) ? 'vez' :'veces'}`);  
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        // Codigo cuando el usuario no acerto //
        if(numeroDeUsuario > numeroSecreto) {
            AsignarTextoElemento('p' , "El número secreto es menor");   
        } else {
            AsignarTextoElemento('p', "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

// Si ya sorteamos todo los números
if (listaNumerosSortiados.length == numeroMaximo) {
    AsignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
} else { 
    // Si el número generado esta en la lista hace lo que abajo indica, sino lo siguiente
    if (listaNumerosSortiados.includes (numeroGenerado)) {
    return generarNumeroSecreto();
    
    } else {
    listaNumerosSortiados.push(numeroGenerado);
    return numeroGenerado;

    }
}
}

function condicionesIniciales() {
    AsignarTextoElemento('h1', 'Juego del número secreto');
    AsignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
//Limpiar caja
limpiarCaja();
//Indicar mensajes de intervalo de números iniciales
//Generar el número aleatorio
//Iniciar el número de intentos 
condicionesIniciales();
//Deshabilitar el bóton de nuevo mensaje
document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

