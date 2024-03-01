let numeroSecreto;
let intentos;
let listaNumeroIntento = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
}

function verificarintentoDeUsuario(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el numero!! en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            
        }else{
            //el usuario no acerto
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','el numero es menor' )
            }else{
                if (numeroSecreto > numeroDeUsuario){
                    asignarTextoElemento('p','el numero es mayor' )
                }}
                intentos++;
                console.log(intentos)
                limpiar_caja();
                
        }
        return;
}

function limpiar_caja(){
    let valor_caja = document.querySelector('#valorUsuario');
    valor_caja.value = '';
}

function generarNumeroSecreto(){
    let numerGenerado = Math.floor(Math.random()*10)+1;
    console.log(numerGenerado);

    if (listaNumeroIntento.includes(numerGenerado)){
        return generarNumeroSecreto()
    }else{
        listaNumeroIntento.push(numerGenerado);
    }
    return numerGenerado;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','escoge un numero del 1 al 10');
    numeroSecreto =generarNumeroSecreto();
    intentos = 1
}
function reiniciarJuego(){
    limpiar_caja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true)
    

}
 
condicionesIniciales()