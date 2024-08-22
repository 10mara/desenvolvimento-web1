        //Captura dos elementos html que serão manipulados pelo js
        let inputPeso= document.getElementById("peso")
        let inputAltura= document.getElementById("altura")
        let divSaida= document.getElementById("saida")
        
        let botaoCalcular = document.getElementById("calcular")
        // vincula a fç com o botao
        botaoCalcular.onclick= calculaImc
        
        function calculaImc(){
            // Entrada
            let peso = Number(inputPeso.value)
            let altura = Number(inputAltura.value)
            
            //let peso = Number (prompt("DIGITE SEU PESO"))
            //let altura = Number(prompt("DIGITE SUA ALTURA")) 
            // Procesamento
            let imc  = peso/(altura*altura)

            // Saída
            //document.write("IMC = ",imc)
            divSaida.innerText= imc
        }
        