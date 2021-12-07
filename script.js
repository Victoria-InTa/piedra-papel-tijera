let piedra = document.querySelector('#piedra')
let papel = document.querySelector('#papel')
let tijera = document.querySelector('#tijera')




let titulo2 = document.querySelector('#usuario')
let titulo3 = document.querySelector('#pc')
let titulo4 = document.querySelector('#resultado')


let piedra2,papel2,tijera2

piedra.addEventListener('click', () =>{
    let resultado1
    let  opciones = ['piedra', 'papel','tijera']
    let  random = Math.floor(Math.random()*3)
    let pc = opciones[random]
    titulo3.innerHTML = pc
    piedra2 = "piedra"
    titulo2.innerHTML = piedra2
    if(piedra2 == "piedra" && pc == "piedra"){
        resultado1 = "empate"
        titulo4.innerHTML = resultado1
    }else if(piedra2 == "piedra" && pc == "tijera"){
        resultado1 = "Piedra le gana a tijera"
        titulo4.innerHTML = resultado1
    }else if(piedra2 == "piedra"  && pc == "papel"){
        resultado1 = "papel le gana a piedra"
        titulo4.innerHTML = resultado1
    }

})
papel.addEventListener('click', () =>{
    let resultado1
    let  opciones = ['piedra', 'papel','tijera']
    let  random = Math.floor(Math.random()*3)
    let pc = opciones[random]
    titulo3.innerHTML = pc
    papel2 = "papel"
    titulo2.innerHTML = papel2
    if(papel2 == "papel" && pc == "papel"){
        resultado1 = "empate"
        titulo4.innerHTML = resultado1
    }else if (papel2 == "papel" && pc == "piedra"){
        resultado1 = "papel le gana a piedra"
        titulo4.innerHTML = resultado1
    }else if(papel2=="papel" && pc=="tijera"){
        resultado1 = "tijera le gana a papel"
        titulo4.innerHTML = resultado1
    } 

})
tijera.addEventListener('click', () =>{
    let resultado1
    let  opciones = ['piedra', 'papel','tijera']
    let  random = Math.floor(Math.random()*3)
    let pc = opciones[random]
    titulo3.innerHTML = pc
    tijera2 = "tijera"
    titulo2.innerHTML = tijera2
    if(tijera2 == "tijera" && pc == "tijera"){
        resultado1 = "empate"
        titulo4.innerHTML = resultado1
    }else if(tijera2=="tijera" && pc =="piedra"){
        resultado1 = "piedra le gana a tijera"
        titulo4.innerHTML = resultado1
    }else if(tijera2=="tijera" && pc =="papel"){
        resultado1 = "tijera le gana a papel"
        titulo4.innerHTML= resultado1
    }

})
