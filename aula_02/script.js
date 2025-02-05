function contactUs(){
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const email = document.querySelector("#email")
    const message = document.querySelector("#message")
    const btn = document.querySelector(".btn")

    const firstNameValue = document.querySelector("#firstName").value
    const lastNameValue = document.querySelector("#lastName").value
    const emailValue = document.querySelector("#email").value
    const messageValue = document.querySelector("#message").value

    if (firstNameValue === "") {
        firstName.classList.add("erro")
    } else {
        firstName.classList.remove("erro")
    }

    if (lastNameValue === "") {
        lastName.classList.add("erro")
    } else {
        lastName.classList.remove("erro")
    }

    if (emailValue === "") {
        email.classList.add("erro")
    } else {
        email.classList.remove("erro")
    }

    if (messageValue === "") {
        message.classList.add("erro")
    } else {
        message.classList.remove("erro")
    }
}