function imprimir() {
    console.log("ola mundo!")
}

imprimir()


const imprimir2 = () => {
    console.log("arrow function!")
    
}

imprimir2()


function imprimir3(nome) {
  console.log(`ola: ${nome}`);
}

imprimir3('fulano')

function somar(numero1, numero2) {
    return(numero1 + numero2)

}

console.log(somar(2, 3))