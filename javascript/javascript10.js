const user = {
    nome: "Davi",
    idade: "29"
}

const produtos = [
{nome: "Maça", preco: 2.50},
{nome: "Iphone", preco: 5500},

]

const produtosMaiorDeIdade = [
    {nome: "51", preco: 50},
    {nome: "JackDaniels", preco: 100},
]

if(user.idade>= "18"){                                              // chave vai executa o retorno do if
    console.log(produtos, produtosMaiorDeIdade)
} else {
    console.log(produtos)
}