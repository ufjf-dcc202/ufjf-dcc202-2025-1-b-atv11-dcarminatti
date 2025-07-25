import {
  getLista,
  adicionaNaLista,
  removeDaLista,
  limpaLista,
} from "./lista.js";

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

function limpaItensDeLista() {
  limpaLista();
  atualizarLista();
}

function adicionarItem() {
  const item = pEntrada.textContent.trim();
  if (item) {
    adicionaNaLista(item);
    pEntrada.textContent = "";
    atualizarLista();
  }
}

function removerItem() {
  const input = prompt(
    "Digite o índice do item a ser removido (começando de 0):"
  );
  const index = parseInt(input, 10) - 1;
  if (!isNaN(index) && index >= 0 && index < getLista().length) {
    removeDaLista(index);
    atualizarLista();
  } else {
    alert("Por favor, insira um número válido.");
  }
  pEntrada.textContent = "";
  atualizarLista();
}

btnLimpar.addEventListener("click", limpaItensDeLista);
btnAdicionar.addEventListener("click", adicionarItem);
btnRemover.addEventListener("click", removerItem);

atualizarLista();
