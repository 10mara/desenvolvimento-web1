    let inputDist= document.getElementById("d")
    let inputAuto= document.getElementById("aut")
    let inputPed= document.getElementById("ped")
    let inputPreco= document.getElementById("p")
    let divSaida= document.getElementById("saida")
    
    let botaoCalcular = document.getElementById("calcular")
    botaoCalcular.onclick = calculaProb
    
    function calculaProb(){
        // Entrada
        let d = Number(inputDist.value)
        let aut = Number(inputAuto.value)
        let p = Number(inputPreco.value)
        let ped = Number(inputPed.value)

        // Procesamento
        let total= ((d/aut)*p)+ped

        // Saída
        divSaida.innerText= total
        
    }
 