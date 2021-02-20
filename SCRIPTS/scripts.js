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

*/

/*############  ESCOPO ############



-------------------------------------------*/