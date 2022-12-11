const btn = document.querySelector("button");
const lista = document.querySelector("#lista");


btn.addEventListener("click", alterar)
function alterar() {
  lista.innerHTML += `<ul><li> nova entrada</li></ul>`
}