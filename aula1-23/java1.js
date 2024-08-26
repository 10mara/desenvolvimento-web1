    //Captura dos elementos html que serão manipulados pelo js
    let inputCapital= document.getElementById("c")
    let inputTaxa= document.getElementById("t")
    let inputPeriodo= document.getElementById("p")
    let divSaida= document.getElementById("saida")
    
    let botaoCalcular = document.getElementById("calcula")
    botaoCalcular.onclick = calculaJuros
    
    function calculaJuros(){
        // Entrada
        let c = Number(inputCapital.value)
        let t = Number(inputTaxa.value)
        let p = Number(inputPeriodo.value)

        // Procesamento
        let m = c*((1+t)** p)

        // Saída
        divSaida.innerText = m
        
    }
 