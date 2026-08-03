//json script OBJECT NOTATION

/* {
  nome:"geraldin",
  idade:101
} */
/* let usuario = [
  {nome: "geraldo",
    idade:99
  }
]
console.log(usuario)
let userFormatado =JSON.stringify(usuario)
console.log(userFormatado)
let userDescompact = JSON.parse(userFormatado)
console.log(userDescompact) */


// METODOS HTTP almacenad datos en local storage]
// CREATE crea elementos, objetos
//localStorage.setItem("nome","Arlindo Cruz")
// READ leitora, visualiza elementos, objetos
//let buscar=localStorage.getItem("nome")
//console.log(buscar)
// DELETE elimina elementos, objetos
//localStorage.removeItem("nome") // DELETE elimina elementos, objetos
let usuario = {nome:"geraldin", idade:101, profissao:"programador"}
localStorage.setItem("usuario", JSON.stringify(usuario))
//localStorage.clear()


