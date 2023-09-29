'use strict'

const contatos = [
{
    nome: 'Jerome bueno',
    mensagem: 'Posso realizar o pagamento por...',
    nome2: 'João Paulo',
    imagem: 'boneco.jfif',
    tempo: 'Há 30 minutos'
},
{
    nome: 'daniel Silva',
    mensagem: 'Márcia diz: bom dia, como posso ajuda...',
    nome2: 'Márcia',
    imagem: 'boneco.jfif',
    tempo: 'Há 30 minutos'
},
{
    nome: 'Bruno Adorno',
    mensagem: 'Bom dia, gostaria de saber quant...',
    nome2: 'Jovsi',
    imagem: 'boneco.jfif',
    tempo: 'Há 30 minutos'
}
]

function criarContatos (contatos) {
    const container = document.getElementById('linhacontainer')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${contato.imagem}`
    imagem.alt = contato.nome

    const textos = document.createElement('div')
    textos.classList.add('textos')

    const
}