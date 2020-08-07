//Procurar botão
document
    .querySelector('#add-time')
    // Quando clicar no botão
    .addEventListener('click', cloneField)
// Executar uma ação
function cloneField() {
    if (document.querySelector('#schedule-items').childElementCount <= 7) {
        // Duplicar campos. Quais campos?
        const newFieldsContainer = document
            .querySelector('.schedule-item')
            .cloneNode(true)
        // Limpar os campos. Quais campos?
        const fields = newFieldsContainer.querySelectorAll('input')

        // Limpar casa um dos campos
        fields.forEach(function (fields) {
            // Limpar o fields atual
            fields.value = null
        })
        // Colocar na página
        document
            .querySelector('#schedule-items')
            .appendChild(newFieldsContainer)
    } else console.log('Máximo de 7 campos alcançado!')
}
