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
    else {console.log("vixxi, quase que nao mas sim")    }
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
/* let nota = Number(prompt("Digite a nota do aluno:"));
let mencao = "";

switch (true) {
  case isNaN(nota) || nota < 0 || nota > 100:
    mencao = "Nota inválida!";
    break;

  case nota >= 90:
    mencao = "A";
    break;

  case nota >= 80:
    mencao = "B";
    break;

  case nota >= 60:
    mencao = "C";
    break;

  case nota >= 40:
    mencao = "D";
    break;

  default:
    mencao = "Perdeu!";
}*/
/*
let numSecret = Math.floor(Math.random() * 10) + 1;
let chute = null;
let limite = 5;
let tentativa = 0;

while (chute !== numSecret && tentativa < limite) {
    tentativa++;

    chute = Number(prompt("Digite o número secreto:"));

    if (chute === numSecret) {
        alert("Acertou!! 😀😂😊🥰");
    } else if (chute < numSecret) {
        alert("Insira um número maior.");
    } else {
        alert("Insira um número menor.");
    }
}

if (chute !== numSecret) {
    alert("Game Over! O número secreto era " + numSecret);
}*/

let idade = 20;
let situacaoEscolar = true;
let documentos = true;
let pagamento = true;

if (idade >= 20) {
    if (situacaoEscolar) {
        if (documentos) {
            if (pagamento) {
                console.log("Você está matriculado");
            } else {
                console.log("Falta pagamento");
            }
        } else {
            console.log("Documentação incompleta");
        }
    } else {
        console.log("Você não atende aos requisitos");
    }
} else {
    console.log("Você não tem idade suficiente");
}