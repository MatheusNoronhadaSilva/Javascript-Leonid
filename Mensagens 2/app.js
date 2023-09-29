'use strict'

const perfis = [
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
{
    imagem: "boneco.jfif",
    nome: "jerome Bueno",
    mensagem: "posso realizar o pagamento por...",
    nome2: "João Paulo",
    notificacao: "1",
    tempo: "30 minutos"
},
]

function criarCards(perfis) {
    const container = document.getElementById('linhamensagens')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${perfis.imagem}`
    imagem.alt = perfis.nome

    const textos = document.createElement('div')
    textos.classList.add('textos')

    const principal = document.createElement('div')
    principal.classList.add('principal')

    const nome = document.createElement('h2')
    nome.textContent = perfis.nome

    const div = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = perfis.notificacao
    
    const tempo = document.createElement('span')
    tempo.textContent = perfis.tempo

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = perfis.mensagem

    const nome2 = document.createElement('div')
    nome2.classList.add('nome2')
    nome2.textContent = perfis.nome2

    div.appendChild(p)
    principal.replaceChildren(nome, div, tempo)
    textos.replaceChildren(principal, mensagem, nome2)
    card.replaceChildren(imagem, textos)

    container.appendChild(card)


}

perfis.forEach(criarCards)