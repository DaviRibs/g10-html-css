// Armazenar valores dos inputs altura e peso
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");

// Armazenar o botão
var btn = document.getElementById("btn");

// Armazenar a div fim
var fim = document.getElementById("fim");

// Função para calcular o IMC
function calcularIMC() {
    // Armazenar e converter valores dos inputs
    const valorAltura = parseFloat(altura.value);
    const valorPeso = parseFloat(peso.value);

    // Validar entrada do usuário
    if (isNaN(valorAltura) || isNaN(valorPeso) || valorAltura <= 0) {
        fim.innerHTML = "Por favor, insira valores válidos.";
        return null;
    }

    // Calcular o IMC
    return valorPeso / (valorAltura * valorAltura);
}

// Função de clique
function calcular() {
    // Chamar a função de calcularIMC
    const imc = calcularIMC();
    var mensagem = ""
    if(imc < 18.5){
        mensagem = "Você está baixo do peso"
    }

    if(imc >= 18.5 && imc < 24.9){
        mensagem = "Você está com o peso normal"
    }

    if(imc >= 25 && imc < 29.9){
        mensagem = "Você está sobrepeso"
    }

    if(imc >= 30 && imc < 34.9){
        mensagem = "Você está com obesidade grau 1"
    }

    if(imc >= 35 && imc < 39.9){
        mensagem = "Você está com obesidade grau 2"
    }


    // Renderizar o resultado na div fim, se válido
    
   fim.innerHTML = `
    <div class="linha"></div>
    <div class="resultado">
        <div class="esquerda">
            <h2>${imc.toFixed(2)}</h2>
            <p>Seu IMC</p>
        </div>
        <div class="direita">
        <p>${mensagem}</p>
        </div>
    </div>
    <div class="linha"></div>
   `
    
}

// Adicionar evento de clique ao botão
btn.addEventListener("click", calcular);
