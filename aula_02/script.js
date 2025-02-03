document.getElementById("adicionarTarefas").addEventListener("click", function () {

    const inputTarefas = document.querySelector("#novaTarefa");
    const tarefaTexto = inputTarefas.value;

    if(tarefaTexto === ""){
        alert("o campo não pode estar vazio!")
    }    

    const listaTarefas = document.querySelector("#listaTarefas")

    // cria um elemento LI
    const li = document.createElement("li")
    li.textContent = tarefaTexto;

    // adiciona li ao html

    listaTarefas.appendChild(li)
});

document.getElementById("limpartarefas").addEventListener("click", function(){
    const listaTarefas = document.querySelector("#listaTarefas")
    listaTarefas.textContent = "";
})