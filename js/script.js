var botoes = document.querySelectorAll('.js-button')

botoes[0].addEventListener('click', () => document.body.classList.toggle('popup--aberto'))
// aqui está um exemplo muito bom de como a função assíncrona funciona na prática. Se nao pusermos esse código dentro de uma função ele vai executar a função imediatamente. addEventListener tem um listener e uma função como parâmetros
// o que eu percebo com isso é que o curso javascript impressionador só precisa de um exemplo prático. Poderiam misturar os projetos de html/css e javascript
botoes[1].addEventListener('click', () => document.body.classList.toggle('popup--aberto'))
botoes[2].addEventListener('click', () => document.body.classList.toggle('popup--aberto'))
botoes[3].addEventListener('click', () => document.body.classList.toggle('popup--aberto'))