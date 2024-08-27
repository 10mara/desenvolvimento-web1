let inputValor = document.getElementById("valor")
let inputProd = document.getElementById("prod")
let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
// vincula a fç com o botao
botaoCalcular.onclick= calculaTroco

function calculaTroco(){
    // Entrada
    let prod = Number(inputProd.value)
    let valor = Number(inputValor.value)
    // Procesamento
    let troco  = valor-prod
    let ced20 = troco/20
    let resto = troco%20
    let ced10 = resto/10
    let moeda1= resto%10
    // Saída
    //document.write("IMC = ",imc)
    divSaida = document.write("Será necessário ", ced20, " de 20 e ", ced10, " de 10 e ", moeda1," de 1 real.")

}
