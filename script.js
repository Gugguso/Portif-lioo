console.log("JS conectado!");
const botaoTema = document.getElementById("btn-tema");
function alternarTema() {
  document.body.classList.toggle("escuro");
}
botaoTema.addEventListerner("click", alternarTema);
const trilho = document.getElementById("trilho-projetos");
const btnAnterior = document.getElementById("btnanterior");
const btnProximo = document.getElementeById("btn-proximo");

function rolarDireita() {
  trilho.scrollBy({ left: 320, behavior: "smooth" });
}
function rolarEsquerda() {
  trilho.scrollBy({ left: -320, behavior: "smooth" });
}
btnProximo.addEventListerner("click", rolarDireita);
btnAnterior.addEventListener("click", rolarEsquerda);
function animarBarras() {
  document.querySelectorAll(".nivel").forEach((barra) => {
    barra.style.width = barra.dataset.nivel + "%";
  });
}

