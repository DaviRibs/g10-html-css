const user = {
    nome: "Davi",
    altura: 1.80,
    peso: 90
}

console.log(user.nome); // Exibe o nome do usuário no console

function calcularIMC(user) {
    // Calcula o Índice de Massa Corporal (IMC) do usuário
    const imc = user.peso / (user.altura * user.altura);
    // não é mais utilizado o else if, por questão de boa pratica
    // utilizamos o return agora
    // Retorna a categoria correspondente ao IMC do usuário
    if (imc < 16) { 
        return "Magreza grave"; // IMC abaixo de 16 indica magreza extrema       
    }
    if (imc <= 16 && imc < 17) {
        return "Magreza moderada"; // IMC entre 16 e 17 indica magreza moderada
    }
    if (imc < 17 && imc < 17) {
        return "Magreza leve"; // IMC entre 17 e 18.5 indica magreza leve
    }
    if (imc < 25) {
        return "Peso normal"; // IMC entre 18.5 e 25 é considerado saudável
    }
    if (imc < 30) {
        return "Sobrepeso"; // IMC entre 25 e 30 indica excesso de peso
    }
    if (imc < 35) {
        return "Obesidade grau I"; // IMC entre 30 e 35 indica obesidade leve
    }
    if (imc < 40) {
        return "Obesidade grau II"; // IMC entre 35 e 40 indica obesidade moderada
    }
    
    return "Obesidade grau III"; // IMC acima de 40 indica obesidade severa
}
// Chama a função e exibe o resultado no console
console.log(calcularIMC(user));
