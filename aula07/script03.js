// Seleciona os elementos
const imagem = document.getElementById("minhaImagem");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");


// Função que troca a imagem
function trocarImagem(evento) {
    const botaoClicado = evento.target.id;
  
    if (botaoClicado === "botao1") {
      imagem.src = "img/RDR2.avif";
    } else if (botaoClicado === "botao2") {
      imagem.src = "img/days gone.jpg"
    } else if (botaoClicado === "botao3") {
      imagem.src = "img/b4.avif"
    }
  }
// Associa o evento de clique
botao1.addEventListener("click", trocarImagem);
botao2.addEventListener("click", trocarImagem);
botao3.addEventListener("click", trocarImagem);