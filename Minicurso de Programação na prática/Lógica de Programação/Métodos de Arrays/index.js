const lista = ['banana', 'abacaxi', 'melancia', 'Morango', 'uva']

console.log(lista.length)
console.log(lista.includes('abacaxi')); true
console.log(lista.includes('uva')); false

//console.log(lista.find(function (elemento) {
  //  return elemento === 'laranja'
//}));

//const elementoEncontrado = lista.find(function (elemento) {
   // return elemento === 'banana'
//})

//console.log(elementoEncontrado)


//const novaLista = lista.map(function (elemento) {
  //return "O nome da fruta é: " + elemento;
//});

//console.log(novaLista);

const filtroDeFrutas = lista.filter((elemento) => {
    return elemento.length > 5
})

console.log(filtroDeFrutas)