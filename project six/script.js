
/* let arquivoValido = false;
// let arquivoValido = extensoesPermitidas.some(extensao => arquivo.endsWith(extensao));
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
arquivoValido() */
let a=3
let b="4"
let maria = (a,b) => {a+b}
function jose(a,b) {return a + b}
console.log(`el tipeof maria es: ${typeof maria} `+maria)
console.log(`el tipeof meria() es: ${typeof maria()} `+maria())
console.log(`el tipeof maria(3,4) es: ${typeof maria(3,4)} `+maria(3,4))
console.log(`el tipeof maria(a,b) es: ${typeof maria(a,b)} ` +maria(a,b))
console.log(`el tipeof jose es: ${typeof jose} `+jose)
console.log(`el tipeof jose() es: ${typeof jose()} `+jose())
console.log(`el tipeof jose(3,4) es: ${typeof jose(3,4)} `+jose(3,4))
console.log(`el tipeof jose(a,b) es: ${typeof jose(a,b)} ` +jose(a,b))
