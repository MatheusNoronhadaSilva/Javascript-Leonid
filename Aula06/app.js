'use strict'

async function pegarImagens (){
    //isso é um array
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZkZjIzZmE2LTdjNzMtNDAwMi1hOWY0LWQ0YWU0ZjNhMDIwMSIsImlhdCI6MTY5NTQxMDIwMiwic3ViIjoiZGV2ZWxvcGVyLzQ5MzUwMDAwLTU4ZjItZTQwYy1mNjBkLTE4YWRlMmJmNmExYyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.-0zjaQmzeq-t8X65tEz6Mdq2ok0ORBseJ-7ZMO0XmZTkBBr_xIOHo68-eubgZ_JlJG0YjgMH-vylz6Fp5xVZ7g'
    const endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
    //const options = {
      //  headers: {
        //    Authentication: `Bearer ${token}`
        //}
    //}
    const response = await fetch(endpointyy) 
    const imagens = await response.json()
    return imagens.message
}

function criarTagImg (imagem){
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)
}
async function carregarFotos (){
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}
carregarFotos()