const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const statusTexto = document.getElementById("status");

function ligarLampada() {
  lampada.src = "img/lampada ligada.webp";
  lampada.alt = "Lâmpada Ligada";
  statusTexto.innerText = "A lâmpada está ligada.";
  btnLigar.disabled = true;
  btnDesligar.disabled = false;
}

function desligarLampada() {
  lampada.src = "img/lampada desligada.jpg";
  lampada.alt = "Lâmpada Desligada";
  statusTexto.innerText = "A lâmpada está desligada.";
  btnLigar.disabled = false;
  btnDesligar.disabled = true;
}

// Eventos dos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

// Eventos de mouse
lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseout", desligarLampada);
