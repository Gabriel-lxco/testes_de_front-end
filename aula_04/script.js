document.getElementById("calcular").addEventListener("click", function () {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = document.getElementById("resultado");

  if (!peso || !altura) {
      resultado.textContent = "Preencha todos os campos obrigatórios.";
      resultado.style.color = "red";
      return;
  }

  peso = parseFloat(peso);
  altura = parseFloat(altura);

  if (isNaN(peso) || isNaN(altura)) {
      resultado.textContent = "Insira apenas números válidos.";
      resultado.style.color = "red";
      return;
  }

  if (peso < 10 || peso > 300 || altura < 0.5 || altura > 2.5) {
      resultado.textContent = "Insira valores válidos para peso e altura.";
      resultado.style.color = "red";
      return;
  }

  let imc = peso / (altura * altura);
  let imcFormatado = imc.toFixed(2);

  let classificacao = "";
  if (imc < 18.5) {
      classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
      classificacao = "Peso normal";
  } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
      classificacao = "Obesidade grau 1";
  } else if (imc < 39.9) {
      classificacao = "Obesidade grau 2";
  } else {
      classificacao = "Obesidade grau 3";
  }

  resultado.textContent = `Seu IMC é ${imcFormatado} (${classificacao}).`;
  resultado.style.color = "white";
});

document.getElementById("limpar").addEventListener("click", function () {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").textContent = "";
});
