import { conectaApi } from "./conectarApi.js";
import { mostrarVideos } from ""

async function buscarVideo(evento) {
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideos(dadosDePesquisa);
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener('click', evento => buscarVideo(evento));