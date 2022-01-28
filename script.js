// Crie um objeto que receba ao menos três propriedades sobre você.

let dados = {
    nome: "Anna Esther",
    idade: 22,
    sobrenome: "Assunção",
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
dados.altura = "1, 67cm"


// Remova uma propriedade desse objeto.
delete dados.sobrenome

//Mostre no console todas as propriedades desse objeto.
console.log(dados)

//Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = {
    clientes: [{
            nome: "Joao",
            idade: 20,
            telefone: 00000 - 0000
        },
        {
            nome: "Luiza",
            idade: 25,
            telefone: 10000 - 0000
        },
        {
            nome: "Paula",
            idade: 19,
            telefone: 20000 - 0000
        }
    ],
    amigos: ["Esther", "Andressa", "Douglas", "Dan"]
}

//Mostre no console o nome de um amigo de cada lista.
console.log(cadastro.clientes[0])
console.log(cadastro.amigos[0])
console.log(cadastro.clientes[1])
console.log(cadastro.amigos[1])
console.log(cadastro.clientes[2])
console.log(cadastro.amigos[2])