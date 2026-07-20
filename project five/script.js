/* let name_alumno = "ze"
let nota1 = 15
let nota2 = 15
let nota3 = 15
//promedio()
usandoswitch()

function promedio() {
    let media = (nota1 + nota2 + nota3)/3 
  
    if (media<10){        console.log("Perdeu!") }
    else if (media>10 & media<15){console.log("Boa!!")}
    else if(media===15){console.log("Juan, es voce!!")}
    else if (media>15){console.log("introduccion de dados errada")}
    else {console.log("vixxi, quase que nao mass sim")    }
    console.log(`O Alumno ${name_alumno} tirou media de ${media}`)
}
 */
/* function usandoswitch(){
let media = (nota1 + nota2 + nota3)/3 
  switch (true) {
  case (media < 10) {
      console.log("Menor de 10");
    break;
  }
  case (media >= 10 && dia < 15): {
    console.log("Entre 10 y menor que 15");
    break;
  }
  case (media === 15): {
    console.log("Es exactamente 15");
    break;
  }
  default: {
    console.log("Mayor que 15");
}
} */
//let nota = "9"+"5"
/* let nota = "94"
  switch(true){
    case (nota >=95): 
             console.log("Excelente 😁")
             break
    case (nota >90): 
             console.log("Muito bom 😃")
             break
    case (nota >80): 
             console.log("Bom 🙂")
             break
    case (nota >60): 
             console.log("Mediocre 😐")
             break
    case (nota >50): 
             console.log("horrivel 😐")
             break
    case (nota >0): 
             console.log("se mata 😒")
             break
    default: console.log("Nota invalida 😬")
  }
 */
let nota = 10
let mencao=""
switch(true){
  case nota >=90 && nota <=100:
    mencao = "A"
    console.log(mencao)
    break
    case nota >= 80:
      mencao = "B"
      console.log(mencao)
      break
      case nota >=60:
        mencao = "c"
        console.log(mencao)
        break
        case nota >=40:
          mencao = "D"
          break
          default: mencao = "perdeu!"
}