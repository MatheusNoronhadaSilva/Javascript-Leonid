'use strict'

async function pegarImagens(){
    const endPoint ='https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4&sort=name'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.message
}

function criarTagImg (imagem) {
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)
}

async function carregarFotos(){
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}

carregarFotos()