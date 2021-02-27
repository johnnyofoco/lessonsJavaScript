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

/*
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
*/

/* Expressões e Operadores

- Expressions
- Operators
  let number = 1
  Binary: console.log(1 + 1)
  Unary: console.log(++number)
  Ternary: console.log(true ? 'alo' : 'nada')

*/

/* New = expressão para criar um novo Objeto
let name = new String()
name.surName = "Brito"
let age = new Number(23)
console.log(name, name.surName, age)
*/

/* Operadores unários
    typeof
    delete

    const person = {
    name: 'Mayk',
    age: 25,
}

delete person.age

console.log(typeof person , person)
*/

/* Operadores Aritiméticos
  multiplicação: * (2*4)=8
  divisão: / (25/5)=5
  soma: + (7+7)=14
  subtração: - (10-1) = 9

  resto da divisão: % (10 % 2) = 0
  incremento: ++ (0++)=1
  decremento: -- (12--)=11
  exponencial: ** (3 ** 2)= 3x3 = 9
*/

/* Grouping operator ( ) = pode trocar a ordem das precedências através do uso de parenteses

Ordem de precedência: (), *ou/ , +ou-

let total = 2 + 3 * 5
*/

/* Operadores de comparação

  == igual
  != diferente
  === estritamente igual
  !== estritamente diferente
  > maior
  >= maior igual
  < menor
  <= menor igual

  let one = 1
  let two = 2

  console.log(one === '1')

*/

/* Operadores de atribuição (assignment)

// assignment
 x = 1

 // addition assignment
 x = x + 2
 x += 2

// subtraction assignment
x -= 1
console.log(x)

//multiplication assignment
x = x * 2
x *= 2

//division assignment
x = x/2
x /= 2

//remainder, exponetiation
x %= 2
x **= 2

*/


/* Operadores lógicos

//AND &&
//OR ||
//NOT !

*/
/*
// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

//Ex: true && trye ? 'faça assim' : 'faça outra coisa'

let pao = false
let queijo = false

const niceBrakFast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBrakFast)
*/

//Operadores para String
//Comparison (comparação): ==

//Concatenation (concatenação)
// Retorna a união de duas Strings
//Ex:'String ' + 's' = 'Strings'

/*
  //Falsy   //Truthy
    //Quando um valor é considerado false para Falsy e true para Truthy em contextos onde um booleano é obrigatório ( condicionais e loops)

    false
    0
    -0
    ""
    nullundefined
    Nan

    ou

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

/*
  //Precedência dos operadores

* grouping                           ( )
* negação e incremento               ! ++ --
* multiplicação e divisão            * /
* adição e subtração                 + -
* relacional                         < <= > >=
* igualdade                          == !== === !==
* AND                                &&
* OR                                 ||
* condicional                        ?:
* assignment (atribuição)            = += -= *=

*/

/* CONTROLE DE FLUXO

ex:


//IF
let temperature = 36.9

if (temperature >= 37.5) {
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
}else {
    console.log('Saudável')
}

// SWITCH

function calculate(number1, operator, number2) {
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(500, '%', 353))

*/


//THROW
/*
function sayMyName(name = '') {
    console.log(name)
    if (name === '') {
        throw new Error("Nome é necessário")
    }
    console.log('tudo funcionou bem')
}

//TRY...CATCH
try {
    sayMyName()
} catch (e) {
    console.log(e)
}
*/

/* ESTRUTURA DE REPETIÇÃO

//FOR

for(let i=0; i<100; i++){

    if(i === 50){
        break; //para a execução
    }

    if(i === 40){
        continue //pula a execução
    }
    console.log(i)
}

//WHILE

let i = 0;

while(i <10){
    console.log(i)
    
    i++;
}

//FOR OF
let name = 'Johnny'
let names =  ['João', 'Maria', 'Joaquim']

for(let element of names ){
    console.log(element)
}

//FOR IN

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(`PROPRIEDADE: ${property} / VALOR: ${person[property]}`)
}



*/

