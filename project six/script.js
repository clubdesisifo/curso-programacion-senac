
/* let arquivoValido = false;
// let arquivoValido = extensoesPermitidas.some(extensao => arquivo.endsWith(extensao));
for (let i = 0; i < extensoesPermitidas.length; i++) {
    let extensao = extensoesPermitidas[i];
    
    if (arquivo.endsWith(extensao)) {
        arquivoValido = true;
        console.log(`o arquivo ${arquivo} tem extensao permitida`);
        break; // Detenemos el bucle
    }else{console.log("extensao não permitida")}
} */
/* let arquivo = "documento.pdf";
let extensoesPermitidas = [".jpg", ".png", ".pdf"];
let arquivoValido = function (){
    for (let i=0; i<extensoesPermitidas.length; i++){
        if (arquivo.endsWith(extensoesPermitidas[i])){
            console.log("PERMITIDO")
            return true
        }
    }
        console.log("nao permitido")
        return false

}
/* arquivoValido() 
let a=3
let b="4"
let maria = (a,b) => a+b
function jose(a,b) {return a+b}
console.log(`el tipeof maria es: ${typeof maria} `+maria)
console.log(`el tipeof meria() es: ${typeof maria()} `+maria())
console.log(`el tipeof maria(3,4) es: ${typeof maria(3,4)} `+maria(3,4))
console.log(`el tipeof maria(a,b) es: ${typeof maria(a,b)} ` +maria(a,b))
console.log(`el tipeof jose es: ${typeof jose} `+jose)
console.log(`el tipeof jose() es: ${typeof jose()} `+jose())
console.log(`el tipeof jose(3,4) es: ${typeof jose(3,4)} `+jose(3,4))
console.log(`el tipeof jose(a,b) es: ${typeof jose(a,b)} ` +jose(a,b))
 */  
//METODOS ARRAY
/* let listaNomes = ["andre","pedro","tonho","charles"]
console.log(listaNomes)
listaNomes.push("maria")
console.log(listaNomes)
let novoUsuario = "rafael"
listaNomes.push(novoUsuario) */
/* let usuarios = [{nome: "andre",email:"andresim@gmail.com"},
                {nome: "pedro",email:"pedrim@gmail.com"},
                {nome: "juan",email:"juanim@gmail.com"}]
console.log(usuarios)   
let novoUsuario = [nome: "jurandir",email: "jur@hotmail.com"] 
usuario.push(novoUsuario) */
//push coloca na ultima posicao
/* let historico = ["login","cadastro","detalhes"]
historico.pop ()//elimina el ultimo registro
console.log(historico) */
/* let filaAtendimento = ["cliente A","cliente B", "cliente C","cliente D","cliente E"]
console.log(filaAtendimento)
filaAtendimiento.shift()// elimina o primeiro elemento da lista
console.log(filaAtendimento)
filaAtendimiento.shift()// elimina o primeiro elemento da lista
console.log(filaAtendimento)
filaAtendimiento.shift()// elimina o primeiro elemento da lista
console.log(filaAtendimento)
 */
/* let clientes = [
    "Cliente: 'Ze'",
    "Cliente: 'David'",
    "Cliente: 'Jose'",
    "Cliente: 'Antonia'",
    "Cliente: 'Claudio'",
    "Cliente: 'Ze'"
]
console.log(clientes)
let cliAtendido = clientes.shift()
console.log(`o \"${cliAtendido}\" ja foi atendido`)

 */
/* let tarefas = [
    "abrir base de dados",
    "realizar mapeamento",
    "identificar features",
    "analizar dados",
    "gerar dashboard",
    "gerar insights",
    "enviar repositorio",

]
while (tarefas.length >0){
    let tarefaActual = tarefas.shift()
    console.log(`a tarefa ${tarefaActual} foi concluida con sucesso`)
} */
// METODO UNSHIFT() INCLUSAO NA PRIMEIRA POSICAO

/* let notifications = [
    "novo like",
    "novo comentario",
    "novo post de igui do grau",
    "ratinho comecou uma trsmisao ao vivo",
    "NOTIFICACAO fatal"
]
console.log(notifications)
notifications.unshift("Ta chovendo ai na sua regiao | mensagem de: ")
console.log(notifications)
 */
/* let listaDeSuper = [];

listaDeSuper.push("Leche");
listaDeSuper.push("Pan");
listaDeSuper.push("Huevos");
listaDeSuper.push("Café");
listaDeSuper.push("Biscoito");
listaDeSuper.push("Arroz");
listaDeSuper.push("azucar");
listaDeSuper.push("juju");
listaDeSuper.push("bolacha");
listaDeSuper.push("angu");

alert("lista creada")
console.log("--- Lista inicial ---");
console.log(listaDeSuper); 
for (let i=listaDeSuper.length;i>2;i--){
    let ultimoEliminado = listaDeSuper.pop();
    alert("ULTIMO ELIMINADO");
    console.log(`\nSe eliminó el ítem: ${ultimoEliminado}`)
}

console.log("\n--- Lista final ajustada ---");
console.log(listaDeSuper); 


console.log("\n--- Items que quedaron ---");
for (let item of listaDeSuper) {
    console.log(`- ${item}`);
   
} */
// 1. Lista inicial de compras
/* let listaDeSuper = ["Leche", "Pan", "Huevos"];

// 2. Menú de opciones simples
let opcion = prompt(
  "¿Qué deseas hacer?\n" +
  "1: Agregar al final\n" +
  "2: Agregar al principio\n" +
  "3: Eliminar el último\n" +
  "4: Eliminar el primero\n" +
  "5: Eliminar un ítem específico"
);

// 3. Ejecutar la acción según la opción elegida
if (opcion === "1") {
  let nuevoItem = prompt("Ingresa el ítem para agregar al final:");
  if (nuevoItem) listaDeSuper.push(nuevoItem);

} else if (opcion === "2") {
  let nuevoItem = prompt("Ingresa el ítem para agregar al principio:");
  if (nuevoItem) listaDeSuper.unshift(nuevoItem);

} else if (opcion === "3") {
  let eliminado = listaDeSuper.pop();
  alert(`Se eliminó el último ítem: ${eliminado}`);

} else if (opcion === "4") {
  let eliminado = listaDeSuper.shift();
  alert(`Se eliminó el primer ítem: ${eliminado}`);

} else if (opcion === "5") {
  let itemAEliminar = prompt("Ingresa el nombre exacto del ítem a eliminar:");
  // Recrea la lista conservando solo los ítems distintos al digitado
  listaDeSuper = listaDeSuper.filter(item => item.toLowerCase() !== itemAEliminar.toLowerCase());
  alert(`Si el ítem existía, ha sido eliminado.`);

} else {
  alert("Opción no válida.");
}

// 4. Mostrar el resultado final
console.log("--- Lista actualizada ---");
for (let item of listaDeSuper) {
  console.log(`- ${item}`);
} *//* 
let usuarios= [
    "davi",
    "jorge",
    "pedro",
    "clare",
    "maria"
]
console.log(usuarios)
let usuarioBanido = usuarios.indexOf("pedro") // index 2
usuarios.splice(usuarioBanido,1)
console.log(usuarios)
 */
/* let produtos = [
  "teclado",
  "monitor",
  "mouse",
  "webcam",
  ]
  console.log(produtos)
  produtos.splice(1,2,"monitor")
  console.log(produtos)
 */ // METODO SLICE 
/* let produtos = [
  "teclado",
  "monitor",
  "mouse",
  "webcam",
  ]
  console.log(produtos)
  let prod2 = produtos.slice(0,2)
  console.log(prod2) */
  /* let conteudo = [
    "contA",
    "conta.a",
    "contb",
    "contb.a",
    "contfb.b",
    "contc",
    "contd",
  ]
  let pagOne = conteudo.slice(0,2)
  console.log(pagOne)
  let pagTwo = conteudo.slice(2,4)
  console.log(pagTwo) */

  /* let valores = [100,123,854,532,321,999,543,243]
  let twoUltimate = valores.slides(-2)
  console.log(ultimateTwo) */
  //METODO REVERSE
  /* let mensagens = [
      "opa",
      "beleza?",
      "ce ta baum?",
      "aqui te falar",
      "ja mandou relatorio",
      "ta no atraso man"
  ]
  let rev = mensagens.reverse()
  console.log(rev) */
//METODO SORT()
/* let alunos = [
  "ziraldo",
  "jose",
  "marcos",
  "ana",
  "joaquina",
  "benicio"
]
console.log(alunos)
let ordemAlfa = alunos.sort()
console.log(alunos) */
/* let numeros = [  199,1000,290,1,3 ]
let ordemCrecente = numeros.sort((a,b)=>a-b)  *///orgasniza la lista

//METODO JOIN()
/* let tecnologias = ["javascript","node.js","react","typescript","express","html5","html","css3"]
console.log(url)
let url = tecnologias.join(`\n=================\n`) */
// 1. Arreglo con las 26 letras del alfabeto portugués (desordenadas)
/* let alfabeto = [
  'Z', 'A', 'K', 'B', 'W', 'M', 'C', 'X', 'D', 'Y', 
  'E', 'F', 'G', 'H', 'I', 'J', 'L', 'N', 'O', 'P', 
  'Q', "ó", 'R', 'S', "é", 'T', 'U', 'V', "m", "f", "k", "a", "x", "r", "b", "z", "h", "í", "c", "v", "j", "w",
  "d", "p", "o", "g", "t", "ú", "y", "e", "l", "i", "u", "q", "s", "n", "á", 
]
alfabeto.sort()
console.log(alfabeto)
let alfabetoTexto = alfabeto.join(" | ")
console.log(alfabetoTexto) */
/* let clientes = [
  {
    nome: "Emilio", 
    email: "emilio@outlook.com",
    cargo: "Analista de sistemas",
    idade: 95
  },
  {
    nome: "Juan", 
    email: "Juan@outlook.com",
    cargo: "Disenhador fashion",
    idade: 12
  },
  {
    nome: "Jose", 
    email: "Josesito@outlook.com",
    cargo: "Espeteiro Gourmet",
    idade: 23
  }
];


function obtenerPagina(lista, numeroPagina) {
  let inicio = numeroPagina - 1;
  let fin = numeroPagina;
  
  return lista.slice(inicio, fin);
}


console.log("=== PÁGINA 1 ===");
console.log(obtenerPagina(clientes, 1));

console.log("=== PÁGINA 2 ===");
console.log(obtenerPagina(clientes, 2));

console.log("=== PÁGINA 3 ===");
console.log(obtenerPagina(clientes, 3)); */

/* //
let vendedores = [
  {
    nome :"marlinco",
    vendas :3456
},
{
    nome :"jose",
    vendas :356
},
{
    nome :"juan",
    vendas :3565
},
{
    nome :"andres",
    vendas :3526
},
{
    nome :"cecilia",
    vendas :3156
},
]
console.log(vendedores)
let ranking = vendedores.sort((a,b)=>b.vendas-a.vendas)
console.log(ranking)
ranking.forEach((vendedor,posicao)=>
    console.log(`${posicao+1}}º | O vendedor ${vendedor.nome} vendeu ${vendedor.vendas}`)) */
let nomes = [
  "pneu",
  "roda",
  "oleo",
  "paralama",
  "gasolina",
  "lampada"
]
nomes.forEach((itens,index)=>
console.log(`${index+1}º ${itens}`)
)
