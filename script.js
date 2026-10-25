const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("navegacao");

function definirMenu(aberto) {
  menu.setAttribute("aria-expanded", aberto);
  menu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("aberto", aberto);
}

menu.addEventListener("click", () => {
  definirMenu(menu.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) definirMenu(false);
});
document.getElementById("ano-atual").textContent = new Date().getFullYear();
document.getElementById("imprimir-curriculo")?.addEventListener("click", () => window.print());
const copiarEmail = document.getElementById("copiar-email");
const avisoCopia = document.getElementById("aviso-copia");

if (copiarEmail && avisoCopia) copiarEmail.addEventListener("click", async () => {
  try {
    if (!navigator.clipboard) throw new Error("A área de transferência não está disponível neste navegador.");
    await navigator.clipboard.writeText("gsgustavosobrall@gmail.com");
    avisoCopia.textContent = "E-mail copiado para a área de transferência.";
  } catch (erro) {
    avisoCopia.textContent = "Não foi possível copiar. Selecione e copie o endereço de e-mail.";
    console.error("Falha ao copiar o e-mail de contato:", erro);
  }
});
