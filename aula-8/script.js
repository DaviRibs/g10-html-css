//Armazenar os valores dos inputs pelo id
const dias =document.getElementById("dia") 
const kms = document.getElementById("km")
const categoria = document.getElementById("categoria")

// Armazenar os valores do botão calcular pelo id
const btn = document.getElementById("calcular")

// Armazenar o valor dos resultados pelo id
const valorDiarias = document.getElementById("result-diaria")
const totalDias = document.getElementById("total-dias")
const resultTotalDias = document.getElementById("result-total-dias")
const resultkm = document.getElementById("result-km")
const totalKms = document.getElementById("total-ms")
const resultTotalKms = document.getElementById("result-total-kms")
const resultTotal = document.getElementById("result-total")

function calcular () {
    const economico = {
        diaria: 100,
        km: 0.20
    }
 
    const intermediario = {
        diaria: 150,
        km: 0.40
    }

    const luxo = {
        diaria: 200,
        km:0.80
    }
    let valorDiaria = 0;
    let valorKm = 0;

    if(categoria.value == "economico"){
        valorDiaria = economico.diaria
        valorKm = economico.km
    }
    if(categoria.value == "intermediario"){
        valorDiaria = intermediario.diaria
        valorKm = intermediario.km
    }

    if(categoria.value == "luxo"){
        valorDiaria = luxo.diaria
        valorKm =    luxo.km
    }

    const totalDiarias = valorDiaria * dias.value
    const calTotalKms = valorKm * kms.value
    const total = totalDiarias + calTotalKms

    // Exibir os resultados
    valorDiarias.innerHTML =`R$ ${valorDiaria.toFixed(2)}`
    totalDias.innerHTML = `${dias.value} Dias`
    
    

}

