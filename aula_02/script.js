function instagram(){
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const primeiroNome = document.querySelector("#primeiroNome")
    const nomeUsuario = document.querySelector("#nomeUsuario")
    const btn = document.querySelector(".btn")

    const emailValue = document.querySelector("#email").value
    const passwordValue = document.querySelector("#password").value
    const primeiroNomeValue = document.querySelector("#primeiroNome").value
    const nomeUsuarioValue = document.querySelector("#nomeUsuario").value

    if (emailValue === "") {
        email.classList.add("erro")
    } else {
        email.classList.remove("erro")
    }

    if (passwordValue === "") {
        password.classList.add("erro")
    } else {
        password.classList.remove("erro")
    }

    if (primeiroNomeValue === "") {
        primeiroNome.classList.add("erro")
    } else {
        primeiroNome.classList.remove("erro")
    }

    if (nomeUsuarioValue === "") {
        nomeUsuario.classList.add("erro")
    } else {
        nomeUsuario.classList.remove("erro")
    }
}