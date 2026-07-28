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
/*
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
}*/
//CLAUSULAS DE GUARDA (metodo crud)
/* let idade = 18;
let situacaoEscolar = true;
let documentos = true;
let pagamento = true;

function verificadorDados() {
    if (idade < 20) {
        console.log("Você não tem idade suficiente");
        return;
    }
 
     if (!situacaoEscolar) {
        console.log("Você não atende aos requisitos");
        return;
    }

    if (!documentos) {
        console.log("Você não tem documentos");
        return;
    }

    if (!pagamento) {
        console.log("Pagamento não realizado");
        return;
    }

    console.log("Tudo OK");
}

verificadorDados(); */
/*
function validarSenhaUsuario() {
  let senhaUsuario = prompt("Digite sua senha para verificação:");
  if (senhaUsuario === null) return;
  if (!semEspaco(senhaUsuario)){console.log("Sua senha contem espaços");return;}
  if (!tamanhoCerto(senhaUsuario)) {console.log("Sua Senha debe ter entre 8 ate 15 caracteres");return;}
  if (!temMaiuscula(senhaUsuario)) {console.log("Sua senha não contém letra maiúscula.");return;}
  if (!temMinuscula(senhaUsuario)) {console.log("Sua senha não contém letra minúscula.");return;}
  if (!temNumero(senhaUsuario)) {console.log("Sua senha não contém número.");return;}
  if (!temCaractereEspecial(senhaUsuario)) {console.log("Sua senha não contém caractere especial.");return;}
  if (!senhaRestrita(senhaUsuario)) {console.log("Sua senha contém um caractere especial inválido");return;}
  console.log(`Sua senha ${senhaUsuario} atende a todos os requisitos de segurança!`);
}

function tamanhoCerto(senha) {return senha.length <=15 && senha.length >=8}
function temMaiuscula(senha) { return /[A-Z]/.test(senha); }
function temMinuscula(senha) { return /[a-z]/.test(senha); }
function temNumero(senha) { return /[0-9]/.test(senha); }
function temCaractereEspecial(senha) { return /[^a-zA-Z0-9]/.test(senha); }
function senhaRestrita(senha) { return /^[A-Za-z0-9!@#$%^&*()\-_.+=]+$/.test(senha); }
function semEspaco(senha) { return !/\s/.test(senha);}

validarSenhaUsuario();*/
/*
let palabra = prompt("Digite");
for (let contador=0;contador<palabra.length;contador++){console.log(palabra[contador])}
*/
/*
let frase = prompt("Digite frase");
for (let largura=frase.length;largura>0;largura--){console.log(frase);frase=frase.slice(1);console.log(0,largura)}
*/
/*
console.log(typeof "geraldinho do inhame")
console.log(typeof 100)
console.log(typeof 15.5)
console.log(typeof 15,5)
console.log(typeof true)
console.log(typeof [])
console.log(typeof {})
console.log(typeof null)
console.log(typeof function(){})
console.log()*/
/*let n1=32 //texto, string 
let n2 = 0 // el profesor muda los valores de la division para traer la idea de tipos de errores que se generan "nan"
let div = n1/n2
console.log(div)*/ //en funcion de intentar una reparacion antes de ejecutar un codigo

/* try {
    let n1 = 2
    let n2 = 21

    if (typeof n1 !== "number") {
        throw new Error("A entrada tem que ser com número")
    }

    if (typeof n2 !== "number") {
        throw new Error("A entrada tem que ser com número")
    }

    if (n2 === 0) {
        throw new Error("A entrada não pode ser 0")
    }

    console.log(n1 / n2)
    console.log(typeof erro)

}
catch(erro) {
    console.log(erro.message)
     console.log(erro)
    console.log(typeof erro)
    console.log(erro.name)
  
    console.log(erro.stack)

} 
finally{
    console.log("o programa foi finalizado") */

/* try {
    // Forçamos um erro para entrar no catch
    throw new Error("Minha mensagem de erro")

}
catch (erro) {

    console.log("===== OBJETO COMPLETO =====")
    console.log(erro)

    console.log("===== TIPO =====")
    console.log(typeof erro)

    console.log("===== NOME =====")
    console.log(erro.name)

    console.log("===== MENSAGEM =====")
    console.log(erro.message)

    console.log("===== STACK =====")
    console.log(erro.stack)

    console.log("===== PROPRIEDADES DO OBJETO =====")
    console.log(Object.getOwnPropertyNames(erro))

    console.log("===== PROTÓTIPO =====")
    console.log(Object.getPrototypeOf(erro))

    console.log("===== HERANÇA =====")
    console.log(erro instanceof Error)
}
 */
/* let cpf = "12345678901"

function verificadorCPF(cpf){

    if(typeof cpf !== "string"){
        throw new Error("O CPF inserido é inválido")
    }

    if(cpf.length !== 11){
        throw new Error("O CPF deve conter 11 dígitos")
    }

    return (
        cpf.slice(0,3) + "." +
        cpf.slice(3,6) + "." +
        cpf.slice(6,9) + "." +
        cpf.slice(9,11)
    )
}

try{
    console.log(verificadorCPF(cpf))
}
catch(erro){
    console.log(erro.message)
} */
/* let idade=Number(prompt("!Digite sua idade"))
function verificaIdade(idade){

    if(isNaN(idade) || idade < 0){
        throw new Error("A idade inserida é inválida")
    }

    return `Tudo ok, sua idade é ${idade}`
}

try{
    console.log(verificaIdade(idade))
}
catch(erro){
    console.log(erro.message)
} */
/* let idade = 25

function verificaIdade(idade){

    if(typeof idade !== "number" || idade < 0){
        throw new Error("A idade inserida é inválida")
    }

    return `Tudo ok, sua idade é ${idade}`
}

try{
    console.log(verificaIdade(idade))
}
catch(erro){
    console.log(erro.message)
} */
// 1. Creamos un array de prueba
/* const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"];

console.log("--- ARRAY ORIGINAL ---");
console.log(frutas);

console.log("\n--- EXPERIMENTANDO CON SLICE ---");

// Ejemplo A: Cortar desde el índice 1 hasta el 3 (el 3 NO se incluye)
// Devuelve los elementos en los índices 1 y 2 ("Banana" y "Cereza")
const seleccion1 = frutas.slice(1, 3);
console.log("slice(1, 3):", seleccion1);

// Ejemplo B: Si omites el segundo número, corta desde ese índice hasta el final
const desdeBanana = frutas.slice(1);
console.log("slice(1):", desdeBanana);

// Ejemplo C: ¡Usar números negativos! Cuenta desde el final hacia atrás
// -2 significa "los últimos 2 elementos"
const ultimasDos = frutas.slice(-2);
console.log("slice(-2):", ultimasDos);

// Ejemplo D: Duplicar el array completo (muy común)
const copia = frutas.slice();
console.log("slice():", copia);

console.log("\n--- VERIFICACIÓN ---");
// Comprobamos que el array original NUNCA cambió
console.log("Original intacto:", frutas); */
/* let frase = "atrapa la manzana rapido"

for (let i = 0; i <= frase.length; i++) {

    let izquierda = frase.slice(0, i)
    let derecha = frase.slice(i)

    console.log(izquierda + "🙂" + derecha)

} */
/* let admByometry = false
function verificadorByo(admByometry){
    if(typeof admByometry !=="boolean"){
        throw new Error("erro de tipo  de dado")
    }
    if(admByometry){console.log("Acesso Liverado");}
    else{console.log("Acesso Negado, biometria invalida");}
}
try{
    verificadorByo(admByometry)
}
catch(erro){console.log(erro.message)}
finally{console.log("Operacao de credenciamento finalizada");} */
//if (idade>=18){console.log("maior Idade")}else{console.log("menor idade")}

// operador ternarios: ALMACENAMENTO DE EXPRESOES SIMPLES
/* let idade = 18
let situacao = idade >= 18 ?
    "maior idade":
    "menor idade"
    console.log(situacao)


let esSocio = false;
let precioFinal = esSocio ? 80 : 100;
console.log(`El total a pagar es: $${precioFinal}`); 


let idade = 20;
let salario = 3500;
let resultado = idade < 18 ? "idade insuficiente" : (salario < 3000 ? "renda insuficiente" : "financiamento aprovado");

console.log(resultado); */
//------------------------------------------------------- ate aqui o mamao com azucar
// metodos - strings
//let nome = "GERALDO"
//console.log(nome.toLowerCase())]

/* let nome = "GERALDO"
let nomeMaiuscul0=nome.toLowerCase()
console.log(nomeMaiusculo) */
/* 
let a="python"
let b="Python"
if (a===b){console.log("iguais")}else{console.log("diferente")} */
// METODO INCLUDES() busqueda, filtros, permisos, verificaciones, y validacion
//let email = "teste@empresa.com"
//if email.includes("@empresa.com"){console.log("institucional")}else{console.log("pessoal")}

/* let produto = "Notebook AsusNitro V15"
let filtro="V15"
if (produto.includes(filtro)){console.log("sim includes")}
 */

/* let emailUsuario = "1121607@SENACminas.edu.br"
emailUsuario = emailUsuario.toLowerCase()
let dominioSenac = "@senacminas.edu.br"
if (emailUsuario.includes(dominioSenac)){console.log("pode ingresar no site administrativo usando seu cpf e senha")}
else{console.log("Usuario externo nao pode ingresar no site administrativo")} */
/* let clientes = [
    {
        nome: "Geraldo",
        email: "gerardim@yahoo.com"
    },
    {
        nome: "Jose",
        email: "joseito@gmail.com"
    },
    {
        nome: "Juan",
        email: "Joaocinho@gmail.com"
    },
    {
        nome: "Ze",
        email: "zezinho@hotmail.com"
    }
];

let dominio = "@gmail.com";

// 1. Filtramos el arreglo de objetos
let clientsGmails = clientes.filter(elemento => elemento.email.includes(dominio));

// 2. Imprimimos el resultado completo del filtro
console.log(clientsGmails);

// 3. Recorremos para mostrar solo los nombres
for (let item of clientsGmails) {
    console.log(item.nome);
}
 */
//metodos STARTwith e ENDwith
/* let url = https://www.meusite.com.br"
let validator = "https://"
if (url.startWith(validator)){
    console.log("site seguro")
} */
/* let cidade ="SJD_registro123"
let inicio = "SJD_"
if (cidade.startsWith(inicio)){blablablas}
 */
/* let arquivos = ["File.png","lile.pdf", "vide.mp4", "apresentacao.ppt","relatorio.docx", "Financeiro.xlsx", "Datawarehouse.csv"]
let extensoesPermitidas = [".xlsx",".csv",".xls",".sql"]
for(let arquivo of arquivos){
    let arquivoValido = extensoesPermitidas.some (
        extensao =>arquivo.endsWith(extensao)
    )
    if (arquivoValido){console.log("este arquivo est apermitido")}
    else{console.log("arquivo no permitido")
}
}  Escribe un código que compruebe si al menos uno de los archivos de la lista es un archivo ejecutable (que termine en ".exe")
*/
let arquivos = ["foto.jpg", "documento.pdf", "script.exe"]
let hayEjecutables = false

for (let i=0; i<arquivos.length;i++){
    let arquivoActual=arquivos[i]
    if (arquivoActual.endsWith(".exe")){
        hayEjecutables = true
        break
    }
}
console.log(hayEjecutables)


/* let extensoesPermitidas = [".jpg", ".png", ".pdf"]
for (let arquivo of arquivos) {
    let arquivoValido = extensoesPermitidas.some(
        extensao => arquivo.endsWith(extensao))
} */