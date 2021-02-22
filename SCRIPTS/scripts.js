/*############  TIPOS DE DADOS ############

ECMAScript standard

Primitive(Primitivos) / Primitive value = Não é um objeto e são imutavéis.

*String
*Number
*Boolean
*undefined
*Symbol
*BigInt

Structural (Estruturais)
*Object
   -Array
   -Map
   -Set
   -Date
   -...
*Function

Structural Primitive

*null
----------------------------------------------------------*/

/*############ Cadeia de caracteres - String  ############

"" aspas duplas
'' aspas simples
`` template literals = aceita multiplas linhas e expressões de   linguagens

Exemplo(s):
console.log(`Mayk ${4*4}`)
----------------------------------------------------------*/

/*############ Números - Numbers  ############

33 inteiros
12.5 reais - float
NaN Not a Number
Infinity - infinito

Exemplo(s):

console.log(33)
----------------------------------------------------------*/

/*############ Booleano - Booleans  ############
somente 2 valores
true ou false

Exemplo(s):

console.log(false)
###############################################################*/

/*############ undefined vs null  ############

undefined: Não definido
null:
   Nulo / objeto não possyi nada dentro / Diferente de não definido

Exemplo(s):

console.log(undefined === null)
###############################################################*/

/*############ Object  ############

Object
   Possui propriedades = atributos
   Possui funcionalidades = métodos

Exemplo(s): {propriedade: "valor"}

console.log({
    name: "Johnny",
    idade: 36,
    andar: function() {
        console.log('Andou 1 passo')
    }
})

###############################################################*/

/*############ Array  ############

Array (Vetores) = Uma lista  / Agrupamento de dados

console.log([
    "Leite",
    "Ovos",
    "Açucar"
])
############################################################*/

/*############  VARIÁVEIS ############

var =
let =
const = Constante não pode mudar

Exemplos:

var clima = "Quente"
clima = "uow"

let nome = "Johnny"

console.log(clima)
console.log(nome)

ESCOPO = Determina a visibilidade de uma variável

var = (hoisting) é global e local, funciona dentro e fora do escopo do bloco;

let e const = são locais e só funcionam no escopo onde foi criada (porém caso o escopo seja global, os escopos internos poderam utilizar a let ou const)

NOMES DAS VARIAVEIS LET'S OU CONST

* Pode iniciar com caracteres especiais
* Pode iniciar com letras
* Pode colocar acentos
* Aceita maísculas e minúsculas e faz diferença

* Não pode iniciar com números
* Não pode colocar espaços vazios no nome

É ideal
* Criar nomes que fazem sentido
* Que explique o que a variável é ou faz
* camelCase
* snake_case
* Escrever em inglês


//declaração or declaration
var nameHuman

// assignment or atribuição de valores
var nameHuman = 'Johnny'

// Tipo de dado que foi colocado na varíavel
console.log(typeof nameHuman)

// agrupamento de declarações
let age, isHuman

age = 18
isHuman = true

// multiplos argymentos na funcao
// console.log(nameHuman, age, isHuman)

// escrita de texto + variáveis

//concatenando valores
//console.log('O ' + nameHuman + ' tem ' + age + //' anos ')

// interpolando valores com template literals or template strings
console.log(`O ${nameHuman} tem ${age} anos.`)

-------------------------------------------*/

/*############ OBJECT ############

const person = {
    name: 'John',
    age: 30,
    weight: 90.7,
    isAdmin: true
}

console.log(person.name)

##########################################*/

/*############ ARRAYS ############

const animals = [
    'Lion',
    'Monkey',
    'Cat',
    {
        name: 'Dog',
        age: 3
    }
]

// Acessar valores dentro do array
console.log(animals[3].name)

##########################################*/

//1. Declare uma variável de nome weight
//let weight

//2. Que tipo de dado é a variável acima?
//console.log(typeof weight)

/*
3. Declare uma varíavel e atribua valores para um dos dados:
* nameHuman String
* age: Number (integer)
* starts: Number (float)
* isSubscribed: Boolean

*/
/*
let nameHuman = "Johnny"
let age = 31
let stars = 5.1
let isSubscribed = true
*/
//3.1 faça um objeto com cada propriedade baseado nas variáveis.
/*
let student = {
    nameHuman: "Johnny",
    age: 31,
    weight: 79.5,
    isSubscribed: true
}
*/
/*console.log(`O ${student.nameHuman} tem ${student.age} anos de idade, pesa${student.weight} e seu status de inscrito é: ${student.isSubscribed} kg's.`)
*/
//4. A variável student abaixo é de que tipo de dados?//let student = {}
//R: é um object null

/*
 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
R: let students = []

*/

/*
  6. Reatribua para a variável acima colocando dentro dela o objeto criado.

*/
/*
let students = []

students = [
    student
]
*/
//console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do array students

/*
const john = {
    name: "Mary",
    age: 23,
    weight: 74.8,
    isSubscribed: true
}
students[1] = john

console.log(students)

*/
