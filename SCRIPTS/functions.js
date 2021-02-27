/* ### Transformar notas escolares

Crie um algortimo que transforme as notas do sitema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A 
* entre 80 - 89   - B 
* entre 70 - 79   - C 
* entre 60 - 69   - D 
* menor que 60    - E 



let notaNum = -1

function pegaNota(notaNum) {

    let notaAlpha;

    if (notaNum < 0 || notaNum > 100) {
        notaAlpha = 'Nota inválida'
    } else if (notaNum === 0) {
        notaAlpha = 'F'
    } else if (notaNum < 60) {
        notaAlpha = 'E'
    } else if (notaNum <= 69) {
        notaAlpha = 'D'
    } else if (notaNum <= 79) {
        notaAlpha = 'C'
    } else if (notaNum <= 89) {
        notaAlpha = 'B'
    } else if (notaNum <= 100) {
        notaAlpha = 'A'
    } else if (notaNum < 0) {

    }

    return console.log(`Nota Numérica: ${notaNum} / Nota Caracteres: ${notaAlpha}`)

}

pegaNota(-10)
pegaNota(101)
pegaNota(0)
pegaNota(1)
pegaNota(45)
pegaNota(61)
pegaNota(60)
pegaNota(99)

*/

/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo



const family = {
    incomes: [1100],
    expenses: [1100]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {

    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    if (total < 0) {
        status = 'Saldo negativo'
    } else if (total > 0) {
        status = 'Saldo Positivo'
    } else {
        status = 'Saldo ta ruim hein!?'
    }
    return console.log(`${status} de R$ ${total.toFixed(2)}`)
}

calculateBalance()

*/

/* ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahnrenheit e faça a transformação em unidade para outra

  C = (F-32) * 5/9
  F = C * 9/5 + 32

*/

let temperature = "36c"

function temperatureConversion(String) {
    let type = this.charAt(3)

    if (type === 'C' || type === 'c') {
        temp = (temp * (9 / 5)) + 32
        console.log(`Temperatura: Celcius, convertida em Fahrenheit: ${temp}º`)
    } else if (type === 'F' || type === 'f') {
        temp = (temp - 32) * (5 / 9)
        console.log(`Temperatura: Fahrenheit, convertida em Celcius: ${temp}º`)
    } else {
        console.log('Temperatura inválida')
    }

    return
}

temperatureConversion(temperature)