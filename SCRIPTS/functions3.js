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


function temperatureConversion(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Temperatura inválida')

    } else if (celsiusExists) {
        console.log(`Temperatura informada: ${degree.toUpperCase()}`)
        upgradeDegree = Number(degree.toUpperCase().replace("C", ""))
        upgradeDegree = (upgradeDegree * (9 / 5)) + 32
        console.log(`Convertida em Fahrenheit: ${upgradeDegree}ºF`)

    } else if (fahrenheitExists) {
        console.log(`Temperatura informada: ${degree.toUpperCase()}`)
        upgradeDegree = Number(degree.toUpperCase().replace("F", ""))
        upgradeDegree = (upgradeDegree - 32) * (5 / 9)
        console.log(`Convertida em Celsius: ${upgradeDegree}ºC`)
    }

}

try {
    temperatureConversion('10f')
} catch (error) {
    console.log(error.message)
}
*/


/* Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

    * [FEITO!]Contar o número de categorias e o número de livros em cada categoria
    * [FEITO!]Contar o número de autores
    * [FEITO!]Mostrar livros do autor Augusto Cury
    * Transformar a função acima de uma função que irá receber o nome do autor e devolver os livros desse autor.

*/
/*
//Objeto principal
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O Homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituiível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ]
    }
]

const totalCategories = booksByCategory.length

console.log('Total de categorias: ', totalCategories);
for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category, ': ', category.books.length)
}

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log('Total de autores:', authors.length)
}

countAuthors()

function booksOfAugustoCury() {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log('Livros do Augusto Cury:', books)
}

booksOfAugustoCury()

function booksOfAuthor(authorName) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === authorName) {
                books.push(book.title)
            }
        }
    }

    console.log('Livros do Autor:', authorName, ': ', books.join(", "))
}

booksOfAuthor('Augusto Cury')
*/

