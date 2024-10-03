function primo(numero) {
    if (numero <= 1) return false; 
    if (numero === 2) return true;  
    if (numero % 2 === 0) return false; 

    for (let i = 3; i * i <= numero; i += 2) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; 
}

function imprimirPrimos(N) {
    let contagem = 0; 
    let numero = 2;   

    while (contagem < N) {
        if (primo(numero)) {
            console.log(numero); 
            contagem++;         
        }
        numero++; 
    }
}
const N = 4; 
imprimirPrimos(N);