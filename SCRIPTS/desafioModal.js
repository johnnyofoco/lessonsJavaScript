//SELEÇÃO DOS ELEMENTOS A SEREM UTILIZADOS

//Seleciona o elemento alvo do listener/evento
const buttonOpenModal = document.getElementById('openModal')
//Seleciona a div que será alterada
const modalWrapper = document.querySelector('.modal-wrapper')

//CRIANDO FUNÇÕES
//Função que deixa visível a div ao clicar no btn
buttonOpenModal.onclick = function(){
    modalWrapper
     .classList
      .remove('invisible')
}

//ADICIONANDO UM LISTENER PARA A TECLA ESC
document.addEventListener('keydown', function(event){
    console.log(event)
    const isEscKey = event.key === 'Escape'
    
    if(isEscKey ){
        modalWrapper
            .classList
                .add('invisible')
    }
})