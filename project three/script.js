// Captura os elementos do DOM
const botao = document.getElementById("botao-menu");
const menu = document.getElementById("menu-container");

// Adiciona o evento de clique
botao.addEventListener("click", function() {
    // Alterna a classe 'open' para animar o X
    botao.classList.toggle("open");
    
    // Alterna a classe 'active' para o menu descer ou subir
    menu.classList.toggle("active");
});