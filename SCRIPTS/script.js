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


const elementSixteen = document.querySelector('main')

// nextSibling  nextElementSibling
console.log("[main]nextSibling:",elementSixteen.nextSibling)
console.log("[main]nextElementSibling:",elementSixteen.nextElementSibling)

//previousSibling previousElementSibling
console.log("[main]previousSibling:",elementSixteen.previousSibling)

console.log("[main]previousElementSiblingibling:",elementSixteen.previousElementSibling)

/*###################################*/

//ADICIONANDO ELEMENTOS

const h2 = document.createElement('h2')

h2.innerText = "Olá Dev!"
h2.style.textAlign = 'center'
h2.style.color = '#FF3344'
h2.style.marginTop = '1rem'

const container = document.querySelector('.container')

// append (fica no final o elemento pai) prepend (fica no começo do elemento pai)

container.prepend(h2)
container.append(h2)

//insertBefore (pode-se inserir novas tags HTML, no "meio" do aninhamento de tags do elemento pai escolhido, útil quando se precisa adicionar um elemento nem no começo e nem no fim, mas sim e uma posição específica)

const div = document.createElement('div')
div.innerText = "insertBefore"
div.style.border = '1px solid black'
div.style.textAlign = 'center'
div.style.margin = '0 auto'
div.style.marginTop = '2rem'
div.style.backgroundColor = 'red'
div.style.color = 'white'

//insertBefore
const container2 = document.querySelector('.container')
const nav = container2.querySelector('nav')

container2.insertBefore(div, nav)

//[simular] "insertAfter" que não existe
const div2 = document.createElement('div')
div2.innerText = "insertAfter"
div2.style.border = '1px solid black'
div2.style.textAlign = 'center'
div2.style.margin = '0 auto'
div2.style.marginTop = '2rem'
div2.style.backgroundColor = 'red'
div2.style.color = 'white'
const container3 = document.querySelector('.container')
const nav2 = container3.querySelector('nav')

container3.insertBefore(div2, nav.nextSibling)

/*###################################*/

// EVENTOS

//definido via atributo on na tag html
function print(){
   console.log('print')
}

//Eventos de teclado

const input = document.querySelector('input')

input.onkeypress = function(){
   console.log('rodei')
}

//Adicionando eventos via js
//Adicionando um listener

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
   console.log('print-via-js')
}

//Argumento event

input.onclick =  function(event){
   console.log(event)
}