//Captura dos elementos html que serão manipulados pelo js
let inputVel= document.getElementById("velM")
let inputVei= document.getElementById("veiculo")
let divSaida= document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
// vincula a fç com o botao
botaoCalcular.onclick= calculaMulta

function calculaMulta(){
    // Entrada
    let velM = Number(inputVel.value)
    let veiculo = Number(inputVei.value)
    let max20= velM+(velM*0,20)
    if (veiculo <= max20){
        r= "Você excedeu até 20% da velocidade máxima. Sua multa é de r$ 130,16"
    }
    

    // Saída
    divSaida.innerText = r
}
