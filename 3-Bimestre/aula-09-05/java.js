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
    let max20= velM+(velM*0.20)
    let max50= velM+(velM*0.50)
    let conta = (veiculo - velM)/velM
    if (veiculo <= max20){
        r = "Você excedeu " + conta*100 +"% que é até 20% da velocidade máxima. Sua multa é de R$ 130,16"
    }
    else if(max20 < veiculo && veiculo < max50 || veiculo==max50){
        r = "Você excedeu "+ conta*100 + "% que é até 50% da velocidade máxima. Sua multa é de R$ 195,23"
    }
    else if (veiculo > max50) {
        r = "Você excedeu " + conta*100 +"% que é mais que 50% da velocidade máxima. Sua multa é de R$ 880,41"
    }
    

    // Saída
    divSaida.innerText = r
}
