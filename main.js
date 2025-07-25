import { getLista, adicionaNaLista, removeDaLista, limpaLista } from "./lista.js";

const olItens = document.getElementById("itens");
const pEntrada = document.getElementById("entrada");
const btnAdicionar = document.getElementById("adicionar");
const btnRemover = document.getElementById("remover");
const btnLimpar = document.getElementById("limpar");

function atualizarLista() {
  olItens.innerHTML = "";
  const lista = getLista();
  lista.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.dataset.index = index;
    olItens.appendChild(li);
  });
}

atualizarLista();