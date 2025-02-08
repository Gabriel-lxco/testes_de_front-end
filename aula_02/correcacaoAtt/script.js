document.getElementById("btn").addEventListener("click", function() {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const nomeCompleto = document.querySelector("#nomeCompleto");
    const nomeUsuario = document.querySelector("#nomeUsuario");

    let camposVazios = false;

    if (email.value.trim() === "") {
        email.classList.add("erro");
        camposVazios = true;
    } else {
        email.classList.remove("erro");
    }

    if (password.value.trim() === "") {
        password.classList.add("erro");
        camposVazios = true;
    } else {
        password.classList.remove("erro");
    }

    if (nomeCompleto.value.trim() === "") {
        nomeCompleto.classList.add("erro");
        camposVazios = true;
    } else {
        nomeCompleto.classList.remove("erro");
    }

    if (nomeUsuario.value.trim() === "") {
        nomeUsuario.classList.add("erro");
        camposVazios = true;
    } else {
        nomeUsuario.classList.remove("erro");
    }

    if (!camposVazios) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "pagina_bemVindo.html";
    }
});
