//ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativado");
  } 
} 

links.forEach(ativarLink);

//ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
