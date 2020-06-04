function popularUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        
        for(state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    
    })

}

popularUFs()

function getCities(){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value 
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for(city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })

}

document 
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//itens de coleta
//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items")
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")     /*adicionar ou remover uma classe com javascript
                                              classList.add -> adiciona uma classe
                                              classList.remove -> remove uma classe
                                              classList.toggle -> adiciona ou remove uma classe
                                            */
    
    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados
    /*const alreadySelected = selectedItems.findIndex(item => { //CÓDIGO NÃO REFATORADO
        const itemFound = item == itemId
        return itemFound
    })*/

    //se já estiver selecionado
    /*if (alreadySelected != -1){ //CÓDIGO NÃO REFATORADO
        //tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })*/
    if (selectedItems.findIndex(item => item == itemId) != -1){ //CÓDIGO REFATORADO

        selectedItems = selectedItems.filter(item => item != itemId)
    
    }else{
    //se não estiver selecionado, adiconar à seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}

