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
    if(imc < 16){
        return console.log("Magreza grave")
    } 

    if(imc >= 16 && imc < 17){
        return console.log("Magreza moderada")
    }

    if(imc >= 17 && imc < 18.5){
        return console.log("Magreza leve")
    }

    if(imc >= 18.5 && imc < 25){
        return console.log("Saudável")
    }

    if(imc >= 25 && imc < 30){
        return console.log("Sobrepeso")
    }

    if(imc >= 30 && imc < 35){
        return console.log("Obesidade grau 1")
    }

    if(imc >= 35 && imc < 40){
        return console.log("Obesidade grau 2")
    }

    if(imc >= 40){
        return console.log("Obesidade grau 3")
    }
}
// Chama a função e exibe o resultado no console
console.log(calcularIMC(user));
