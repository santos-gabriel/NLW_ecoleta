const buttonSearch = document.querySelector("#page-home main a")
//guarda botões
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
//adicona e remove classe que esconde parte de pesquisa
buttonSearch.addEventListener("click", () => modal.classList.remove("hide"))
close.addEventListener("click", () => modal.classList.add("hide"))
