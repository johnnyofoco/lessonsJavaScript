//DOM (Document Object Model)

/*
   - É o HTML convertido para um Objeto JavaScript
   - API que representa e interage com o HTML
   - Estrutura de dados do tipo árvore, criada pelo browser
   - Propriedades e métodos

   * Pra que?
   - JavaScript usa a DOM para se conectar ao HTML
   - Manipular o HTML com o JavaScript
   - Você só programa para WEB porque existe a DOM
*/

/*###################################*/


//PROPRIEDADES E METÓDOS DA API DOM
console.log("PROPRIEDADES E METÓDOS DA API DOM:")

//getElementByID (element)
const elementOne = document.getElementById('blog-title')
console.log("getElementByID:",elementOne)

//getElementByClassName (HTMLCollection)
const elementTwo = document.getElementsByClassName('one')
console.log("getElementByClassName:",elementTwo)

//getElementsByTagName (HTMLCollection)
const elementTree = document.getElementsByTagName('meta')
console.log("getElementByTagName:",elementTree)

//querySelection() (element)

const elementFour = document.querySelector('p')
console.log("querySelection 'p':",elementFour)

//querySelectionAll() (NodeList)

const elementFive = document.querySelectorAll('meta')
console.log("querySelectionAll 'meta':",elementFive)

/*###################################*/

//Manipulando contéudo
// textContent = adiciona, remove ou altera o texto

const elementSix = document.querySelector('h1')

elementSix.textContent = " + Olá Dev!"

console.log("textContent:",elementSix)

//innerText = modifica totalmente o texto interno constante na tag html selecionada

const elementSeven = document.querySelector('h1')

elementSeven.innerText = " javaScript"

console.log("innerText:",elementSeven)

//innerHTML = permite adicionar código HTML via javaScript

const elementEight = document.querySelector('h1')

elementEight.innerHTML = " <small>Teste</small>"

console.log("textHTML:",elementEight)

//value = manipula o valor de um input por exemplo

const elementNine = document.querySelector('input')

console.log("value (tag HTML):",elementNine.value)

elementNine.value = "Valor inserido via javaScript"

console.log("value (mostra a propriedade do elemento html):",elementNine)

//Atributos = manipula os atributos dos elementos html

const elementTen = document.querySelector('header')

elementTen.setAttribute('id', 'cabeçalho')

const elementEleven = document.querySelector('#cabeçalho')

console.log("getAttibute (apresenta o valor do atributo escolhido):",elementEleven.getAttribute('id'))

elementEleven.removeAttribute('id')

/*###################################*/

//Manipulando estilos (CSS)

//style = permite adicionar estilo(css) in-line ou pegar o estilo aplicado.

const elementTwelve = document.querySelector('body')

elementTwelve.style.backgroundColor = "#f9f3d2"

console.log("style (adiciona css in line via javaScript):",elementTwelve.style.backgroundColor)

//classList

const elementThirteen = document.querySelector('body')

elementThirteen.classList.add('active')

console.log("classList:",elementThirteen.classList)

/*###################################*/

// Navegando pelos elementos
// parentNode parentElement

const elementFourteen = document.querySelector('h1')

console.log("parentNode:",elementFourteen.parentNode)

console.log("parentElement", elementFourteen.parentElement)

// childNodes children
const elementFifteen = document.querySelector('body')

console.log("childNodes:",elementFifteen.childNodes)

// firstChild firstElementChild
console.log("firstElementChild:",elementFifteen.firstElementChild)

// lastChild lastElementChild

console.log("lastElementChild:",elementFifteen.lastElementChild)






