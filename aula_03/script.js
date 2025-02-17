function mudarTema() {
  let body = document.body;
  let button = document.getElementById("tema");

  body.classList.toggle('modo-claro');
  body.classList.toggle('modo-escuro');

  if (body.classList.contains('modo-escuro')) {
      button.textContent = "Modo Claro";
  } else {
      button.textContent = "Modo Escuro";
  }
}
