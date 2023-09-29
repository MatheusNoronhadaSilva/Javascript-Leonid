'use strict'

const cepInput = document.getElementById('cep')


async function pegarCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const cepInfo =  await response.json()

    return cepInfo
}
async function preencherCampos(){
    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const estado = document.getElementById('estado')
    const cidade = document.getElementById('cidade')

    const cepInfo = await pegarCep(cepInput.value);

    endereco.value = cepInfo.logradouro
    bairro.cidade = cepInfo.bairro
    cidade.value = cepInfo.localiddade
    estado.value = cepInfo.uf
    console.log(cepInfo)
}

cepInput.addEventListener('focusout', preencherCampos)
//Focusout - acontece quando o input é deselecionado