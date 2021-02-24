// function expression
// function anonymous

//parâmetros (parameters)
/*const sum = function (number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 'a'
let number2 = 'b'
sum(number1, number2) // arguments = argumentos

console.log(`o número 1 é: ${number1}`)
console.log(`o número 2 é: ${number2}`)
console.log(`a soma é: ${sum(number1, number2)}`)
*/
/*//Function hoisting

sayMyName()

function sayMyName() {
    console.log('Johnny')
}*/

/*
//Arrow function

const sayMyName = (name) => {

    console.log(name)
}

sayMyName('Johnny Marlon')
*/

//Callback function
/*
function sayMyName(name){

    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
*/

//Funções construtoras
/*
//expressão new
//criar um novo objeto
//this keyword

function Person(name) {
    this.name = name
}

const mayk = new Person("Johnny Uow")
console.log(mayk)
*/

/*
   Prototype

   *prototype-based language
   * prototype chain
   * __proto__
   * ex: "Johnny".__proto__
*/

/* (Alteração de um tipo de dado para  outro tipo)

   Type conversion /typecasting:
    ex: console.log(Number('9') + 5)

    Type coersion:
    ex: console.log('9' + 5)

*/

//Manipulando Strings e Números

//Transformar String em Número e Número em String
/*
let string = "123"
console.log(`String: ${string} convertida em número: ${Number(string)}`)

let number = 321
console.log(`Number: ${number} convertido em String: ${Number(string)}`)
*/

/*
//Manipulando Strings e Números

//Contar quantos caracteres tem uma palavra e quantos digítos tem um número

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/


/*
//Manipulando Strings e Números

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))

//Tranformar letras minúsculas em maiúsculas

let word = 'Programar é muito bacana!'
console.log(word.toLowerCase().toUpperCase())

//Verificar se o texto contém a palavra amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))


//Separar e juntar strings

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore)


//Criar Array com construtor

let myArray = new Array("a", "b", "c")
console.log(myArray)

//Contar elementos de um array
console.log(["a", "b", "c"].length)


//Transformar uma string em elementos de um array

let word = "manipulação"
console.log(Array.from(word))
*/

//Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar um item no começo
techs.unshift("sql")
//remover um item do final
techs.pop()
//remover um item do começo
techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))

//remover um ou mais itens em qualquer posição do array
//techs.splice(1, 2)
//encontrar a posição de um elemento no array
techs.push("nodejs", "sql")
console.log(techs)
let index = techs.indexOf('nodejs')
console.log(`O index de 'nodejs' no array é: ${index}`)
