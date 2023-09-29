'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosTriplos = document.getElementById('botao-mostrar-numeros-triplos')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplos3e5 = document.getElementById('botao-mostrar-numeros-multiplos3e5')
const botaoMostrarNumerosMultiplos3ou5 = document.getElementById('botao-mostrar-numeros-multiplos3ou5')
const botaoMostrarNumerosprimos = document.getElementById('botao-mostrar-numeros-primos')


function mostarNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[i]
        container.appendChild(novoSpan)
    }

    console.log(numeros)
}
function mostarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if(numeros[i]% 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }

    console.log(numeros)
}
function mostarNumerosTriplos(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-triplos')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
            numeros[i] = numeros[i] * 3
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
    }

    console.log(numeros)

}

function mostrarNumerosImpares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-impares')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++) {
        if (numeros[i] % 2 != 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
        
    }

    console.log(numeros)
}

function mostrarNumerosMultiplos3e5 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-multiplos3e5')
    
    container.replaceChildren('')
    for(let i = 0; i < ultimoI; i++) {
        if(numeros[i] % 3 == 0 && numeros[i] % 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }

    console.log(numeros)
}

function mostrarNumerosMultiplos3ou5 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-multiplos3ou5')

    container.replaceChildren('')
    for(let i = 0; i < ultimoI; i++) {
        if (numeros[i] % 3 == 0 || numeros[i] % 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosprimos () {
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-primos')

    container.replaceChildren('')

    for (let i = 0; i < ultimoI; i++) {
        for (let p = 1; p <= numeros[i]; p++) {
            if (n == 2) {
                break;
            } else if (n % 2 == 0) {
                console.log("Não é primo");
                entradaDeDados.close()
                break;
            } else if (n % 2 == 1) {
                if (n % i == 0) {
                    QtdDivisores+= 1;
                    if (QtdDivisores > 2) {
                        console.log("Não é primo");
                        entradaDeDados.close()
                        break;
                    }
                }
            }
        }
    }
}


botaoMostrarNumeros.addEventListener('click', mostarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostarNumerosPares)
botaoMostrarNumerosTriplos.addEventListener('click', mostarNumerosTriplos)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostrarNumerosMultiplos3e5.addEventListener('click', mostrarNumerosMultiplos3e5)
botaoMostrarNumerosMultiplos3ou5.addEventListener('click', mostrarNumerosMultiplos3ou5)
botaoMostrarNumerosprimos.addEventListener('click', mostrarNumerosprimos)
