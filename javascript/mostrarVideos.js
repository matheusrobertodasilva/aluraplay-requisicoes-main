import { connectaApi } from "./conectaApi.js"

const lista = document.querySelector('[data-lista]');

function constroiCard(titulo,descricao,imagem,url){
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML += `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `;

    return video;
};

async function listavideos(){
    const listaApi = await connectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo,elemento.descricao,elemento.imagem,elemento.url)
        )
    );
};

listavideos()