'use script'

const botaoSomar = document.getElementById('somar')
const botaoidentificar = document.getElementById('identificar')
const botaoResultado = document.getElementById('resultadoAluno')

function some (){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    
    const total = numero1 + numero2

    resultado.textContent = total
}

function identifique () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0) {
        resultado.textContent = 'POSITIVO'
    } else if (numero < 0) {
        resultado.textContent = 'NEGATIVO'
    } else [
        resultado.textContent = 'ZERO'
    ]
}

function aproveReprove () {
    const numeroAluno1 = Number(document.getElementById('numero-aluno1').value)
    const numeroAluno2 = Number(document.getElementById('numero-aluno2').value)
    const numeroAluno3 = Number(document.getElementById('numero-aluno3').value)
    const numeroAluno4 = Number(document.getElementById('numero-aluno4').value)
    const resultado = document.getElementById('resultado-aluno')

    const media = ((numeroAluno1 + numeroAluno2 + numeroAluno3 + numeroAluno4) / 4)

    if (media >= 7) {
        resultado.textContent = 'APROVADO'
    } else {
        const notaExame = Number(document.getElementById('nota-exame').value)
        const media2 = (media + notaExame) / 2

        if (media2 >= 5) {
            resultado.textContent = 'APROVADO'
        } else {
            resultado.textContent = 'REPROVADO'
        }
    }

    
}

botaoSomar.addEventListener('click', some)
botaoidentificar.addEventListener('click', identifique)
botaoResultado.addEventListener('click', aproveReprove)