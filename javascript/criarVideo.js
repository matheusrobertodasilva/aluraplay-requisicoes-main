import {conectaApi} from './conectaApi.js'

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento){
    evento.preventDefault()
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random()*1000).toString();
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    await conectaApi.criaVideo(titulo,descricao,url, imagem); 

    //redirecionamento para a pagina de envio com sucesso 
    window.location.href = '../pages/envio-concluido.html'
};

formulario.addEventListener('submit', evento => criarVideo(evento));