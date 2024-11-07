//Elabore uma função que dada a idade de um atleta devolve sua 
//classificação de acordo com as seguintes categorias:
//infantil A = 5 - 7 anos
//infantil B = 8-10 anos
//juvenil A = 11-13 anos
//juvenil B = 14-17 anos
//adulto = maiores de 18 anos
let i = 0
function idade(i){
    
    if(i>=5 && i<=7){
        console.log("infantil A")
    }
    else if(i>=8 && i<=10){
        console.log("infantil B")
    }
    else if(i>=11 && i<=13){
        console.log("juvenil A")
    }
    else if(i>=14 && i<=17){
        console.log("juvenil B")
    }
    else if(i>=18){
        console.log("adulto")
    }

}
 idade(21)

 