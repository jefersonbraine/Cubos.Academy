//loops

const listaDePessoas = ["Joao", "Maria", "Pedro", "Jose", "Marcos", "Rafael"]

// for tradicional = para cada elemento que ele percorrer em uma lista
//for (let indice = 0; indice < listaDePessoas.length; indice++) {
    // executa alguma coisa para cada elementos percorrido na lista
    //console.log(`meu nome é: ${listaDePessoas[indice]}`)
//}

//console.log(`meu nome é: ${listaDePessoas[2]}`);

// for of = para cada elemento que ele percorrer em uma lista

for (let pessoa of listaDePessoas) {
    console.log(`meu nome é: ${pessoa}`)
}