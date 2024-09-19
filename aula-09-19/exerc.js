let multiplicador = 0
while(multiplicador <= 10){
    let resultado = 2 * multiplicador
    console.log("2 X ", multiplicador, "= ", resultado)
    console.log('2 X ', multiplicador, '=', resultado)
    console.log(`2 X  ${multiplicador} = , ${resultado}`)
    multiplicador ++
}

function tabuada(n){

    //iniciando o multiplicador
    let multiplicador = 0
    while(multiplicador <= 10){//condição
        let resultado = n * multiplicador
        console.log(`${n} x ${multiplicador} = ${resultado}`)
        multiplicador ++//incremento
    }
    //os três no for
    for(let multiplicador = 0;multiplicador <= 10;multiplicador ++){
        let resultado = n * multiplicador
        console.log(`${n} x ${multiplicador} = ${resultado}`)
    }
    console.log(multiplicador)//ele não existe fora do for e no while imprime 11(último valor dele)
}
tabuada(2)


