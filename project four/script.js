const contador = document.getElementById("contador")
const aumentar = document.getElementById("aumentar")
const diminuir = document.getElementById("diminuir")
const resetar = document.getElementById("resetar")

let valor = 0
aumentar.addEventListener("click", ()=>{
    valor ++
    contador.innerText = valor
    mudarcor()
})
diminuir.addEventListener("click", ()=>{
    valor --
    contador.innerText = valor
    mudarcor()
})
resetar.addEventListener("click", ()=>{
    valor = 0
    contador.innerText = valor
    mudarcor()
})
function mudarcor(){
    contador.style.fontSize = `${valor+50}px`
    if (valor<0){
        contador.style.color = "red"}
        else if (valor>0){      
        contador.style.color = "green"
    } else {
        contador.style.color = "blue"
    }
}
