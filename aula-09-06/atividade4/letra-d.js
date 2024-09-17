//A estrutura condicional switch em JavaScript é usada quando você precisa comparar o valor de uma variável ou expressão contra várias opções possíveis. Isso torna o código mais limpo e legível em comparação com o uso de várias instruções if-else.

function letraD(opcao) {
    switch (opcao) {
        case 1:
            console.log("Caminho 1");
            break;
        case 2:
            console.log("Caminho 2");
            break;
        case 3:
            console.log("Caminho 3");
            break;
        case 4:
            console.log("Caminho 4");
            break;
        case 5:
            console.log("Caminho 5");
            break;
        case 6:
            console.log("Caminho 6");
            break;
        case 7:
            console.log("Caminho 7");
            break;
        case 8:
            console.log("Caminho 8");
            break;
        default:
            console.log("Opção inválida. Escolha um número entre 1 e 8.");
    }
}

letraD(3); 
//A estrutura switch verifica o valor de opcao.
//Cada bloco case corresponde a um valor possível.
//O comando break garante que, uma vez encontrada a correspondência, o código saia do switch e não continue executando outros casos.
//O bloco default funciona como um "else", sendo executado caso nenhum dos casos anteriores seja correspondido.
//Essa estrutura é geralmente mais clara e eficiente do que várias instruções if-else quando você tem muitas comparações diretas.
