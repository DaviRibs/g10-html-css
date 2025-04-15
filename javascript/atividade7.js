// uma lista de modelos de carros
// lista usa cocesetes
const modelos = ["Mustang", "Corrola" , "Bmw" ,"Fusion"] // variavel de criação de modelos
console.log(modelos)

//adicionar novo modelo
modelos.push("Nissan")
console.log(modelos)

//contagem
console.log(modelos.length) // 5 na lista

modelos.push("320i")  // não apareceu, pois o console foi colocado primeiro

// remover o ultimo modelo
modelos.pop() // vai ser removido da lista 320i
console.log(modelos)
console.log(modelos.length)

// remover um modelo específico
modelos.splice(1, 1) //remove o modelo na posição 1
console.log(modelos)

